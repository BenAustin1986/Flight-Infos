import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  isLoggedIn: boolean = false;
  submissions: any[] = [];
  successMessage: string = '';
  formData: any = {};

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      this.submissions = [];
    });
  }

  ngOnInit() {
    const savedData = localStorage.getItem('submissions');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  }

  onSubmit(flightForm: NgForm) {
    if (!this.isLoggedIn) {
      this.successMessage = 'You must be logged in to submit the form.';
      return;
    }

    const url = 'https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Ben Austin'
    });

    const payload = {
      airline: flightForm.value.airline,
      arrivalDate: flightForm.value.arrivalDate,
      arrivalTime: flightForm.value.arrivalTime,
      flightNumber: flightForm.value.flightNumber,
      numOfGuests: flightForm.value.numOfGuests,
      comments: flightForm.value.comments || ''
    };

    this.http.post(url, payload, { headers })
      .subscribe({
        next: (response) => {
          this.submissions.push(payload);
          this.successMessage = 'Your flight details have been saved!';
          setTimeout(() => {
            this.successMessage = ''
          }, 3000);
          flightForm.reset();
          localStorage.removeItem('submissions');
          console.log('Success:', response);
        },
        error: (error) => {
          alert('Submission failed!');
          console.error('Error:', error);
        }
      });
  }

  onFormChange() {
    localStorage.setItem('submissions', JSON.stringify(this.submissions));
  }
}

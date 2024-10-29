import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversityService } from './university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.universityForm = this.fb.group({
      universityName: ['', Validators.required],
      universityAddress: ['', Validators.required],
      universityType: ['', Validators.required],
      universityRating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      universityDescription: ['', Validators.required],
      universityImage: ['', Validators.required],
      startingDate: ['', Validators.required],
      casuallyOpensAt: ['', Validators.required],
      campusSize: ['', Validators.required],
      studentBody: ['', [Validators.required, Validators.min(1)]],
      endowment: ['', Validators.required],
      notablePrograms: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.universityForm.valid) {
      // Get the form values
      const formValues = this.universityForm.value;

      // Structure the data for JSONB
      const jsonbData = {
        endowment: formValues.endowment,
        campusSize: formValues.campusSize,
        studentBody: formValues.studentBody,
        notablePrograms: formValues.notablePrograms.split(',').map((program: string) => program.trim())
      };

      // Prepare the full payload with the JSONB data as part of the request
      const payload = {
        universityName: formValues.universityName,
        universityAddress: formValues.universityAddress,
        universityType: formValues.universityType,
        universityRating: formValues.universityRating,
        universityDescription: formValues.universityDescription,
        universityImage: formValues.universityImage,
        startingDate: formValues.startingDate,
        casuallyOpensAt: formValues.casuallyOpensAt,
        value: jsonbData // This is the JSONB data sent as part of the 'value' field
      };

      // Call the post method from the service
      this.universityService.postUniversityInfo(payload).subscribe(
        response => {
          console.log('University information submitted successfully:', response);
        },
        error => {
          console.error('Error submitting university information:', error);
        }
      );
    } else {
      this.universityForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }
}

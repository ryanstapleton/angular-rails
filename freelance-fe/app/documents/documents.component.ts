import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['document.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Document",
      description: "Something",
      file_url: "http:/google.com",
      updated_at: "11/11/11",
      image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png",
    },
    {
      title: "My Second Document",
      description: "Something",
      file_url: "http:/google.com",
      updated_at: "11/11/11",
      image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png",
    },
    {
      title: "My Third Document",
      description: "Something",
      file_url: "http:/google.com",
      updated_at: "11/11/11",
      image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png",
    }
  ]
}
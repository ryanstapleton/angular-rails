import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Document",
      description: "asdfasdfasdfasdf asdf",
      file_url: "http:/google.com",
      updated_at: "11/11/11",
      image_url: "http:/google.com",
    },
    {
      title: "My Second Document",
      description: "asdfasdfasdfasdf asdf",
      file_url: "http:/google.com",
      updated_at: "11/11/11",
      image_url: "http:/google.com",
    },
    {
      title: "My Third Document",
      description: "asdfasdfasdfasdf asdf",
      file_url: "http:/google.com",
      updated_at: "11/11/11",
      image_url: "http:/google.com",
    }
  ]
}
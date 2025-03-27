import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{
  @Input()
  page : number;

  @Input()
  nombreElement : number;

  @Input()
  nombreMaxElement : number;
  
  @Input()
  pageMax : number;

  @Input()
  url : string;

  ngOnInit(): void {
    
  }
}

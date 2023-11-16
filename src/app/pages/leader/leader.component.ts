import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-leader',
  templateUrl: 'leaderpage.html',
  styleUrls: ['leadercss.css',
  'itemcss.css']
})
export class LeaderComponent implements OnInit {
  ngOnInit(): void {
    console.log('Component initialized');
    this.setBrowserWindowTitle('Unideals member leader rules:');
  }

  setBrowserWindowTitle(title: string): void {
    document.title = title;
  }

  theImageUrl1 = 'https://m.media-amazon.com/images/I/71+bNCQyZGL._AC_SL1024_.jpg';
  theImageUrl2 = 'https://m.media-amazon.com/images/I/71neRyzGCfL.__AC_SX300_SY300_QL70_ML2_.jpg';
  theImageUrl3 = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTr1HuouX4HwzQQ_YmXbNoRfgwH0mW8ZICac2NqpsvYx8oPy0NH';

  showGroupLeaderModal(event: Event): void {
    event.preventDefault(); 
    const message = "As a Group Leader, you are stepping into a role of responsibility and commitment. " +
    "Your duties will include the following: " +
    "●Coordinating the purchase of products for the group, ensuring that all orders align with the group's needs and preferences. " +
    "●Managing the collection of funds from group members in a timely and transparent manner. " +
    "●Overseeing the logistics of product delivery, which includes liaising with the suppliers to ensure that the items are received as expected and distributed accordingly. " +
    "●Providing clear communication to group members regarding order statuses, delivery schedules, and any updates or changes to the original plan. " +
    "●Handling any issues or disputes that may arise during the group buying process, including returns, exchanges, or refunds, in accordance with our platform's policies and procedures. " +
    "●Maintaining the privacy and security of all group members' personal and payment information. " +
    "●Ensuring that all activities comply with local laws and regulations related to group purchases and distribution of goods. " +
    "●By accepting the role of a Group Leader, you agree to uphold these responsibilities and to act in the best interest of the group members you represent. " +
    "●Your commitment is crucial to the smooth operation and success of the group buying experience on our platform.";
    
    // Use window.alert to display the message
    window.alert(message);
  }

  
}

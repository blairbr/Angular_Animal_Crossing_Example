import { Component, OnInit } from "@angular/core";

interface Villager {
  id: number;
  name: string;
  personality: string;
  birthday: Date;
  gender: String;
  "catch-phrase": string;
  image_uri: string;
  "bubble-color": string;
  "text-color": string;
  showMoreInfo: true;
}

@Component({
  selector: "app-villagers",
  templateUrl: "./villagers.component.html",
  styleUrls: ["./villagers.component.css"],
})
export class VillagersComponent implements OnInit {
  public villagers: Villager[];
  public mainCharacter : Villager;

  constructor() {
    this.mainCharacter = {
      id: 3,
      name: "Blair",
      personality: "Adventurous",
      birthday: new Date(1988, 9, 22),
      gender: "Female",
      "catch-phrase": "whoop",
      image_uri: "https://acnhapi.com/v1/images/villagers/3",
      "bubble-color": "#990099",
      "text-color": "#fffce9",
      showMoreInfo: true
      };
    
    this.villagers = [
      {
        id: 12,
        name: "Nate",
        personality: "Lazy",
        birthday: new Date(2020, 8, 16),
        gender: "Male",
        "catch-phrase": "yawwwn",
        image_uri: "https://acnhapi.com/v1/images/villagers/12",
        "bubble-color": "#e8b010",
        "text-color": "#fffce9",
        showMoreInfo: true,
      },
      {
        id: 200,
        name: "Bertha",
        personality: "Normal",
        birthday: new Date(2020, 4, 25),
        gender: "Female",
        "catch-phrase": "bloop",
        image_uri: "https://acnhapi.com/v1/images/villagers/200",
        "bubble-color": "#00d1bd",
        "text-color": "#fffce9",
        showMoreInfo: true,
      },
      {
        id: 20,
        name: "Beardo",
        personality: "Smug",
        birthday: new Date(2020, 12, 20),
        gender: "Male",
        "catch-phrase": "whiskers",
        image_uri: "https://acnhapi.com/v1/images/villagers/20",
        "bubble-color": "#3fd8e0",
        "text-color": "#fffce9",
        showMoreInfo: true,
      },
    ];
  }

  delete(event) {
    console.log(event);
    const id = event;

    const deleteIndex = this.villagers.findIndex(function(villager) {
      return villager.id ===id;
    });

    //delet from arra
    this.villagers.splice(deleteIndex, 1);
  }

  toggleMoreInfo(villager) {
    villager.showMoreInfo = !villager.showMoreInfo;
  }

  ngOnInit() {}
}

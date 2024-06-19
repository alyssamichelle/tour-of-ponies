import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pony } from './pony';

@Injectable({
  providedIn: 'root',
})

// Data found in this API
// https://ponyweb.ml/#character
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        "id": "c3f9c1d1-ccb9-4a56-a62e-c12f8e292a87",
        "name": "Twilight Sparkle",
        "largeAvatar": 'twilight-sparkle.png',
        "alias": "Princess Twilight Sparkle",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Twilight_Sparkle",
        "sex": "Female",
        "residence": "Canterlot (S1E1, S9E26)\nCastle of Friendship, Ponyville (seasons 5-9)\nGolden Oak Library, Ponyville (seasons 1-4)\nCrystal Princess Palace (toy line)",
        "occupation": "Ruler of Equestria (S9E26)\nFounder\/leader of the Council of Friendship (S9E26)\nRuler of the Castle of Friendship (S4E26-S9E26)\nFounder\/principal of the School of Friendship (S8E1-S9E20)\nStarlight Glimmer's teacher (S5E26-S7E1)\nGolden Oak Library librarian (seasons 1-4)\nPrincess Celestia's student (seasons 1-3)\nStudent at Celestia's School for Gifted Unicorns (formerly)",
        "kind": [
          "Alicorn",
          "Unicorn",
          "Human"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/bc\/Princess_Twilight_Sparkle_ID_S4E26.png\/revision\/latest?cb=20160207045127",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/6c\/Twilight_S2E25_cropped.png\/revision\/latest?cb=20160315121005",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/9\/97\/Twilight_filly_crop_S2E25.png\/revision\/latest?cb=20140108015837",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/18\/Twilight_Sparkle_infant_ID_MLPS2.png\/revision\/latest?cb=20190823095629",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/ef\/Future_Twilight_Sparkle_ID_S9E26.png\/revision\/latest?cb=20191013013633",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/0c\/Twilight_Sparkle_human_at_lockers_EG.png\/revision\/latest?cb=20141211040145"
        ]
      },
      {
        "id": "1dc7d91a-b84a-4144-924d-d4df879ba33f",
        "name": "Applejack",
        "largeAvatar": 'applejack.png',
        "url": "https:\/\/mlp.fandom.com\/wiki\/Applejack",
        "sex": "Female",
        "residence": "Sweet Apple Acres",
        "occupation": "Farmer\nSchool of Friendship honesty teacher (S8E1 onward)\nCouncil of Friendship member (S9E26)",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/d\/d8\/Applejack_S01E13_cropped.png\/revision\/latest?cb=20130419182236",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/5e\/Teenage_Applejack_ID_S6E23.png\/revision\/latest?cb=20161009222620",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/07\/Filly_Applejack_S1E23.png\/revision\/latest?cb=20131223181959",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/07\/Applejack_infant_ID_S3E08.png\/revision\/latest?cb=20130811205001",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/05\/Future_Applejack_ID_S9E26.png\/revision\/latest?cb=20191013013956"
        ]
      },
      {
        "id": "2aa90f08-8a4e-41e5-bb64-45f750ea4a72",
        "name": "Fluttershy",
        "largeAvatar": 'fluttershy.png',
        "url": "https:\/\/mlp.fandom.com\/wiki\/Fluttershy",
        "sex": "Female",
        "residence": "Outside of Ponyville, in a cottage near the Everfree Forest\nCloudsdale (formerly)",
        "occupation": "Animal caretaker\nPony Tones singer (part-time)\nSchool of Friendship kindness teacher (S8E1 onward)\nCouncil of Friendship member (S9E26)",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/d\/d6\/Fluttershy_ID_S1E17.png\/revision\/latest?cb=20190410214903",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/7a\/Filly_Fluttershy_ID_S1E23.png\/revision\/latest?cb=20130920035134",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/0c\/Future_Fluttershy_ID_S9E26.png\/revision\/latest?cb=20191013014150"
        ]
      },
      {
        "id": "d7cd4495-f95f-4be4-b226-4597fa0265c8",
        "name": "Rarity",
        "largeAvatar": 'rarity.png',
        "url": "https:\/\/mlp.fandom.com\/wiki\/Rarity",
        "sex": "Female",
        "residence": "Carousel Boutique, Ponyville",
        "occupation": "Fashion designer\nShopkeeper\nSeamstress\nPony Tones soprano singer\nSchool of Friendship generosity teacher (S8E1 onward)\nCouncil of Friendship member (S9E26)\nH.O.O.F. Summer Mentor Program mentor to Charity Sweetmint (Rarity and the Curious Case of Charity)",
        "kind": [
          "Unicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/d\/d1\/Rarity_standing_S1E19_CROPPED.png\/revision\/latest?cb=20130418142043",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/b5\/Filly_Rarity_S01E23.png\/revision\/latest?cb=20130808215003",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/f\/f2\/Future_Rarity_ID_S9E26.png\/revision\/latest?cb=20191013014704"
        ]
      },
      {
        "id": "c3f9c1d1-ccb9-4a56-a62e-c12f8e292a87",
        "name": "Pinkie Pie",
        "largeAvatar": 'pinkie-pie.png',
        "alias": "Pinkamena Diane Pie",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Pinkie_Pie",
        "sex": "Female",
        "residence": "Sugarcube Corner, Ponyville\nPie Family Rock Farm, Rockville, Western Equestria (flashback in S1E23)",
        "occupation": "Baker\/caterer\/party organizer for Sugarcube Corner\nFriendship ambassador to Yakyakistan (as of S7E11)\nSchool of Friendship laughter teacher (S8E1 onward)\nCanterlot gala planner (S9E26)\nCouncil of Friendship member (S9E26)",
        "kind": [
          "Human",
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/b2\/Pinkie_Pie_ID_S4E11.png\/revision\/latest?cb=20190410214815",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/60\/Pinkie_Pie_as_a_filly_ID_S4E12.png\/revision\/latest?cb=20140204171208",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e4\/Future_Pinkie_Pie_ID_S9E26.png\/revision\/latest?cb=20191013014325",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/1e\/Pinkie_Pie_human_ID_EG3b.png\/revision\/latest?cb=20160505154644"
        ]
      },
      {
        "id": "6daa9d13-8063-4e2d-a609-ec8ef77161d6",
        "name": "Rainbow Dash",
        "largeAvatar": 'rainbow-dash.png',
        "url": "https:\/\/mlp.fandom.com\/wiki\/Rainbow_Dash",
        "sex": "Female",
        "residence": "Cloudominium over Ponyville\nCloudsdale (formerly)",
        "occupation": "Ponyville weather patrol\nWonderbolt (trainee starting in S3E7; reservist starting in S4E21; full member as of S6E7)\nSchool of Friendship loyalty teacher (S8E1 onward)\nCouncil of Friendship member (S9E26)",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/4b\/Rainbow_Dash_Wonderbolt_fantasy_cropped_S1E3.png\/revision\/latest?cb=20190410214837",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e9\/Filly_Rainbow_Dash_S1E23.png\/revision\/latest?cb=20130913164943",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/25\/Rainbow_Dash_infant_ID_S7E7.png\/revision\/latest?cb=20170813165602",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e2\/Future_Rainbow_Dash_ID_S9E26.png\/revision\/latest?cb=20191013014524"
        ]
      },
      {
        "id": "f8c1ccb7-6766-4e38-935d-d09ec854fe4e",
        "name": "Spike",
        "alias": "Spike the Dragon",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Spike",
        "sex": "Male",
        "residence": "Canterlot (S1E1 and S9E26)\nCastle of Friendship (S4E26 to S9E26)\nGolden Oak Library, Ponyville (season 1 to 4)",
        "occupation": "Twilight Sparkle's assistant\nFriendship ambassador (as of S715)\nTwilight's royal advisor (as of S9E24)\nCouncil of Friendship member (as of S9E26)\nDragon Lord (temporarily in S6E5)",
        "kind": [
          "Dog",
          "Dragon"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/8\/87\/Spike_ID_S8E11.png\/revision\/latest?cb=20180526160714",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/5c\/Spike_ID_S4E24.png\/revision\/latest?cb=20140709021014",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/70\/Baby_Spike_ID_S9E4.png\/revision\/latest?cb=20190423232953",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/3\/30\/Spike_newborn_ID_S1E23.png\/revision\/latest?cb=20130830145203",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/8\/8a\/Future_Spike_ID_S9E26.png\/revision\/latest?cb=20191013014835",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/50\/Spike_ID_EG.png\/revision\/latest?cb=20130727075603"
        ]
      },
      {
        "id": "2c69e0b3-f759-432f-9ff4-df5e211b1f1f",
        "name": "Apple Bloom",
        "alias": "Apple Blossom",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Apple_Bloom",
        "sex": "Female",
        "residence": "Sweet Apple Acres",
        "occupation": "Cutie Mark Crusader\nSchool of Friendship teacher (S9E26)\nSchool of Friendship tutor (S8E12-S9E26)\nStudent (formerly)",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/1c\/Apple_Bloom_ID_S6E4.png\/revision\/latest?cb=20160411140505",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/d\/d3\/Apple_Bloom_infant_ID_S2E23.png\/revision\/latest?cb=20150721214129",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/f\/fb\/Adult_Apple_Bloom_ID_S9E22.png\/revision\/latest?cb=20190928155028"
        ]
      },
      {
        "id": "a7c3c6ef-3f94-46d6-b5c7-3e1689abf9c4",
        "name": "Scootaloo",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Scootaloo",
        "sex": "Female",
        "residence": "A house in Ponyville",
        "occupation": "Cutie Mark Crusader\nSchool of Friendship teacher (S9E26)\nSchool of Friendship tutor (S8E12-S9E26)\nStudent (formerly)",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/5a\/Scootaloo_ID_S6E4.png\/revision\/latest?cb=20160411140522",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/42\/Adult_Scootaloo_ID_S9E22.png\/revision\/latest?cb=20190928155143"
        ]
      },
      {
        "id": "8c397758-688e-4865-aaa2-9dc04b163072",
        "name": "Sweetie Belle",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Sweetie_Belle",
        "sex": "Female",
        "occupation": "Cutie Mark Crusader\nSchool of Friendship teacher (S9E26)\nSchool of Friendship tutor (S8E12-S9E26)\nStudent (formerly)",
        "kind": [
          "Unicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/f\/f1\/Sweetie_Belle_ID_S6E4.png\/revision\/latest?cb=20160411140540",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/14\/Younger_Sweetie_Belle_ID_S4E19.png\/revision\/latest?cb=20140325035303",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/5b\/Micro-Series_issue_3_baby_Sweetie_Belle.png\/revision\/latest?cb=20150722004545",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/59\/Adult_Sweetie_Belle_ID_S9E22.png\/revision\/latest?cb=20190928155049"
        ]
      },
      {
        "id": "c5300f3b-12b1-4629-9bfc-31686e5c1c96",
        "name": "Babs Seed",
        "alias": "Sweetie Babs",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Babs_Seed",
        "sex": "Female",
        "residence": "Manehattan\nFarrier Hill, Hooflyn (in comics)",
        "occupation": "Student\nCutie Mark Crusader (former head of Manehattan Branch)",
        "kind": [
          "Human",
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c0\/Babs_Seed_ID_MLP_Facebook.png\/revision\/latest?cb=20190906111222",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e3\/Babs_Seed_in_a_wolf_costume_S03E04.png\/revision\/latest?cb=20150507143028",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/d\/d8\/Babs_Seed_IDW_Annual_1.png\/revision\/latest?cb=20131102150347"
        ]
      },
      {
        "id": "5c41d4d5-ff44-4dda-a1b2-8e5d75ff8f1f",
        "name": "Gabby",
        "alias": "Gabriella",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Gabby",
        "sex": "Female",
        "residence": "Griffonstone",
        "occupation": "Mail courier\nCutie Mark Crusader",
        "kind": [
          "Griffon"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/ec\/Gabby_ID_S6E19.png\/revision\/latest?cb=20160910211625"
        ]
      },
      {
        "id": "033a2fc6-549f-4ec4-b91f-bcd27f5785a9",
        "name": "Princess Celestia",
        "alias": "Queen Celestia",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Princess_Celestia",
        "sex": "Female",
        "residence": "Silver Shoals (S9E26 onward)\nCanterlot (formerly)\nCastle of the Two Sisters (formerly)",
        "occupation": "Co-ruler of Equestria (formerly)\nTwilight Sparkle's teacher (season 1 to 3)\nSunset Shimmer's teacher (formerly)",
        "kind": [
          "Alicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/2a\/Princess_Celestia_ID_S4E01.png\/revision\/latest?cb=20140322224921",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/2d\/Legends_of_Magic_issue_1_Young_Celestia.png\/revision\/latest?cb=20170502170956"
        ]
      },
      {
        "id": "a81dc55d-c41b-4b52-b4e4-d70de1d275ac",
        "name": "Princess Luna",
        "alias": "Nightmare Moon",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Princess_Luna",
        "sex": "Female",
        "residence": "Silver Shoals (S9E26 onward)\nCanterlot (formerly)\nMoon (banished until S1E1)\nCastle of the Two Sisters (formerly)",
        "occupation": "Co-ruler of Equestria (formerly)",
        "kind": [
          "Alicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/18\/Princess_Luna_ID_S5E04.png\/revision\/latest?cb=20150422172452",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/0f\/Princess_Luna_ID_S1E02.png\/revision\/latest?cb=20130810084859",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/9\/9b\/Nightmare_Moon_ID.png\/revision\/latest?cb=20140702174212"
        ]
      },
      {
        "id": "c840054e-454a-4196-b554-91293b9cbfb7",
        "name": "Prince Blueblood",
        "alias": "Vlad\u00edmir",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Prince_Blueblood",
        "sex": "Male",
        "residence": "Canterlot",
        "kind": [
          "Unicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/b9\/Prince_Blueblood_ID_S1E03.png\/revision\/latest?cb=20110510223111",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/2e\/Young_Blueblood_ID_MLP_Deviations.png\/revision\/latest?cb=20170503231718"
        ]
      },
      {
        "id": "0b269c20-9bb8-4583-9805-d87dd69bdf73",
        "name": "Shining Armor",
        "alias": "Prince Shining Armor",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Shining_Armor",
        "sex": "Male",
        "residence": "Crystal Empire\nCanterlot (formerly)",
        "occupation": "Co-ruler of the Crystal Empire\nCaptain of the Canterlot Royal Guard (formerly)\nStudent at Canterlot Academy (formerly)",
        "kind": [
          "Unicorn",
          "Human"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/29\/Shining_Armor_ID_S5E19.png\/revision\/latest?cb=20151026075733",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/6a\/Shining_Armor_younger_ID_S2E25.png\/revision\/latest?cb=20130812111537",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/b0\/Shining_Armor_Crystal_Pony_ID_S3E02.png\/revision\/latest?cb=20131010004216",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/71\/Shining_Armor_blank_flank_ID_S4E26.png\/revision\/latest?cb=20141210042949",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/a\/a0\/Comic_issue_37_Statue_Shining_Armor.png\/revision\/latest?cb=20160314230145",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c7\/Comic_issue_19_Alternate_Shining_Armor.png\/revision\/latest?cb=20140603161849",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/6a\/Shining_Armor_EG_ID.png\/revision\/latest?cb=20151014103116"
        ]
      },
      {
        "id": "86648870-a662-4c87-8dc3-215038cd89a5",
        "name": "Princess Cadance",
        "alias": "Princess Mi Amore Cadenza",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Princess_Cadance",
        "sex": "Female",
        "residence": "Crystal Empire\nCanterlot (formerly)",
        "occupation": "Co-ruler of the Crystal Empire\nFoal-sitter of Twilight Sparkle (formerly)\nStudent at Canterlot Academy (formerly)",
        "kind": [
          "Alicorn",
          "Human",
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/6f\/Princess_Cadance_ID_S4E11.png\/revision\/latest?cb=20140128163901",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/3\/38\/Younger_Princess_Cadance_ID_S2E25.png\/revision\/latest?cb=20130826005555",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/8\/8c\/Blind_Bag_Princess_Cadance_prototype.jpg\/revision\/latest?cb=20160423023530",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/5a\/Dean_Cadance_ID_EG3.png\/revision\/latest?cb=20151018015310"
        ]
      },
      {
        "id": "ba7c005d-829e-4251-907b-423d40fd41ae",
        "name": "Prince Rutherford",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Prince_Rutherford",
        "sex": "Male",
        "occupation": "Prince of Yakyakistan",
        "kind": [
          "Yak"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/3\/3e\/Prince_Rutherford_ID_S5E11.png\/revision\/latest?cb=20150630030726"
        ]
      },
      {
        "id": "b8cf246d-399f-47c5-b6bc-039c12bf572b",
        "name": "Flurry Heart",
        "alias": "Baby Flurry Heart",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Flurry_Heart",
        "sex": "Female",
        "residence": "Crystal Empire",
        "kind": [
          "Alicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/71\/Flurry_Heart_ID_S6E1.png\/revision\/latest?cb=20160327000953",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/a\/a1\/Flurry_Heart_Crystal_Pony_ID_S6E2.png\/revision\/latest?cb=20160327001545"
        ]
      },
      {
        "id": "9a79f5c8-a4ee-4306-bf4b-090b0ea38464",
        "name": "Ember",
        "alias": "Princess Ember",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Ember",
        "sex": "Female",
        "residence": "Dragon Lands",
        "occupation": "Dragon Lord",
        "kind": [
          "Dragon"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/bc\/Princess_Ember_ID_S6E5.png\/revision\/latest?cb=20160418043217"
        ]
      },
      {
        "id": "0dab8689-4216-4372-87b7-2c8f08165af7",
        "name": "Thorax",
        "alias": "King Thorax",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Thorax",
        "sex": "Male",
        "residence": "Changeling Kingdom\nCrystal Empire (formerly)",
        "occupation": "Leader of the changelings (S6E26 onward)",
        "kind": [
          "Changeling"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c1\/Thorax_new_form_ID_S6E26.png\/revision\/latest?cb=20161024191324",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/8\/85\/Thorax_ID_S6E16.png\/revision\/latest?cb=20160822033001",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/78\/Thorax_shiny_wings_ID_S6E26.png\/revision\/latest?cb=20161025201124",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/42\/Young_Thorax_ID_S7E17.png\/revision\/latest?cb=20170904035229",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e9\/Newborn_Thorax_ID_S6E16.png\/revision\/latest?cb=20160820222708",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/3\/3d\/Crystal_Hoof_ID_S6E16.png\/revision\/latest?cb=20170731011214"
        ]
      },
      {
        "id": "90e34c2b-42ac-4998-8ab7-cd4bad6a269e",
        "name": "Princess Skystar",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Princess_Skystar",
        "sex": "Female",
        "residence": "Seaquestria\nHippogriffia (formerly)",
        "occupation": "Princess of Seaquestria",
        "kind": [
          "Hippogriff",
          "Seapony"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/77\/Princess_Skystar_ID_MLPTM.png\/revision\/latest?cb=20171015024706",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/4a\/Princess_Skystar_Hippogriff_form_ID_MLPTM.png\/revision\/latest?cb=20171015024718"
        ]
      },
      {
        "id": "5dd76394-36c1-4179-bd4a-13ee48cc2f33",
        "name": "Queen Novo",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Queen_Novo",
        "sex": "Female",
        "residence": "Seaquestria\nHippogriffia",
        "occupation": "Ruler of Seaquestria\nRuler of Hippogriffia",
        "kind": [
          "Hippogriff",
          "Seapony"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/f\/f9\/Queen_Novo_ID_MLPTM.png\/revision\/latest?cb=20171016211949",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/42\/Queen_Novo_Hippogriff_form_ID_MLPTM.png\/revision\/latest?cb=20171016211959"
        ]
      },
      {
        "id": "cbe90bb6-200a-493e-ab7e-7cc829519669",
        "name": "Princess Amore",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Princess_Amore",
        "sex": "Female",
        "residence": "Crystal Empire (formerly)",
        "occupation": "Ruler of the Crystal Empire (formerly)",
        "kind": [
          "Unicorn",
          "Crystal"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/60\/FIENDship_is_Magic_issue_1_Princess_Amore.png\/revision\/latest?cb=20150401230216",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/1b\/FIENDship_is_Magic_issue_1_Statue_Amore.png\/revision\/latest?cb=20150404020224"
        ]
      },
      {
        "id": "ee0aa0a9-5e5b-4d25-825a-21bbbc5837d6",
        "name": "Granny Smith",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Granny_Smith",
        "sex": "Female",
        "residence": "Sweet Apple Acres",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/3\/38\/Granny_Smith_ID_S2E06.png\/revision\/latest?cb=20111213195959",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/ea\/Granny_Smith_when_she_was_a_younger_mare_ID_S3E8.png\/revision\/latest?cb=20130809204717",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/4c\/Granny_Smith_filly_ID_S3E8.png\/revision\/latest?cb=20140215044652"
        ]
      },
      {
        "id": "bebdabca-6565-45b6-8220-dc6a2aea25ad",
        "name": "Big McIntosh",
        "alias": "Big Mac",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Big_McIntosh",
        "sex": "Male",
        "residence": "Sweet Apple Acres",
        "occupation": "Farmer\nPony Tones bass singer",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/2b\/Big_McIntosh_id_S2E17.png\/revision\/latest?cb=20150701114631",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/a\/a5\/Young_Big_McIntosh_S1E23.png\/revision\/latest?cb=20130808221410",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/16\/Future_Big_McIntosh_ID_S9E26.png\/revision\/latest?cb=20191013021829"
        ]
      },
      {
        "id": "7994a884-f46c-40e8-a76c-695ead85d7c3",
        "name": "Braeburn",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Braeburn",
        "sex": "Male",
        "residence": "Appleloosa",
        "occupation": "Farmer",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/4b\/Braeburn_ID_S1E21.png\/revision\/latest?cb=20120715144759",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/67\/Teen_Braeburn_ID.png\/revision\/latest?cb=20140426220756"
        ]
      },
      {
        "id": "7137a84c-eff6-4137-9700-727d283cb164",
        "name": "Aunt Orange",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Aunt_and_Uncle_Orange",
        "sex": "Female",
        "residence": "Manehattan",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/ef\/Aunt_Orange_ID_S1E23.png\/revision\/latest?cb=20110823211431"
        ]
      },
      {
        "id": "369709ba-0d32-4437-aeb2-04276bf19dd3",
        "name": "Uncle Orange",
        "alias": "Mosely Orange",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Aunt_and_Uncle_Orange",
        "sex": "Male",
        "residence": "Manehattan",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c2\/Uncle_Orange_ID_S1E23.png\/revision\/latest?cb=20110823211553"
        ]
      },
      {
        "id": "0a5b9089-0bc1-4e6a-bc3b-1ac96425019c",
        "name": "Hayseed Turnip Truck",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Hayseed_Turnip_Truck",
        "sex": "Male",
        "occupation": "\"many odd jobs\"",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/be\/Hayseed_Turnip_Truck_ID_S2E9.png\/revision\/latest?cb=20140623015735"
        ]
      },
      {
        "id": "ccd06b7f-9194-4d7c-9061-88100403a6b8",
        "name": "Apple Strudel",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Apple_Strudel",
        "sex": "Male",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c7\/Apple_Strudel_ID_S2E12.png\/revision\/latest?cb=20150803014838",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/5a\/Young_Apple_Strudel_ID_S3E8.png\/revision\/latest?cb=20150803014839"
        ]
      },
      {
        "id": "e2625075-7947-47b9-b3e0-1c49ff71c22c",
        "name": "Auntie Applesauce",
        "alias": "Aunt Applesauce",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Auntie_Applesauce",
        "sex": "Female",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/2a\/Applesauce_ID_S3E08.png\/revision\/latest?cb=20150507195655",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/a\/ab\/Young_Auntie_Applesauce_ID_S3E8.png\/revision\/latest?cb=20150507195742"
        ]
      },
      {
        "id": "fe8759f6-2772-4581-8738-5c39d6e414b7",
        "name": "Apple Rose",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Apple_Rose",
        "sex": "Female",
        "residence": "Silver Stable Retirement Community",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/10\/Apple_Rose_ID_S3E08.png\/revision\/latest?cb=20150507181548",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/ca\/Young_Apple_Rose_ID_S3E8.png\/revision\/latest?cb=20150507181632"
        ]
      },
      {
        "id": "ec1e3312-f5d4-4b93-acb0-cf62712640a3",
        "name": "Goldie Delicious",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Goldie_Delicious",
        "sex": "Female",
        "residence": "A cabin not far from Ponyville\nSweet Apple Acres (formerly)",
        "occupation": "Historian",
        "kind": [
          "Human",
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c7\/Goldie_Delicious_ID_S4E09.png\/revision\/latest?cb=20140113191231",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/ec\/Young_Goldie_Delicious_ID_S7E13.png\/revision\/latest?cb=20170808004907",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c4\/Goldie_Delicious_ID_EGDS.png\/revision\/latest?cb=20171223024458"
        ]
      },
      {
        "id": "1c47b4d2-b4ff-4fbe-9c19-08770e530314",
        "name": "Bright Mac",
        "alias": "Bright Macintosh",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Bright_Mac_and_Pear_Butter",
        "sex": "Male",
        "residence": "Sweet Apple Acres",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/8\/8e\/Bright_Mac_ID_S7E13.png\/revision\/latest?cb=20170808004854",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/7a\/Bright_Mac_infant_ID_S7E13.png\/revision\/latest?cb=20170808004855"
        ]
      },
      {
        "id": "59feb621-92ad-40ee-8c3a-df077f9c141b",
        "name": "Pear Butter",
        "alias": "Buttercup",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Bright_Mac_and_Pear_Butter",
        "sex": "Female",
        "residence": "Sweet Apple Acres",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e8\/Pear_Butter_ID_S7E13.png\/revision\/latest?cb=20170808004903",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/6d\/Pear_Butter_younger_ID_S7E13.png\/revision\/latest?cb=20170808004905",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/b3\/Pear_Butter_infant_ID_S7E13.png\/revision\/latest?cb=20170808004904"
        ]
      },
      {
        "id": "6c9975f8-e61e-4a21-93aa-158e65d2f49e",
        "name": "Limestone Pie",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Limestone_Pie_and_Marble_Pie",
        "sex": "Female",
        "residence": "Pie Family Rock Farm, Rockville, Western Equestria",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/a\/a2\/Limestone_Pie_ID_S5E20.png\/revision\/latest?cb=20151024190324",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/9\/96\/Limestone_Pie_id_S1E23.png\/revision\/latest?cb=20110825215431"
        ]
      },
      {
        "id": "85c545ea-9722-4322-803a-e6e010cf5c03",
        "name": "Marble Pie",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Limestone_Pie_and_Marble_Pie",
        "sex": "Female",
        "residence": "Pie Family Rock Farm, Rockville, Western Equestria",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/25\/Marble_Pie_ID_S5E20.png\/revision\/latest?cb=20151024190340",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/f\/f2\/Marble_Pie_id_S1E23.png\/revision\/latest?cb=20110825221549"
        ]
      },
      {
        "id": "86a33d6b-1107-475e-bcc8-dad2b8e34fe0",
        "name": "Igneous Rock Pie",
        "alias": "Igneous Rock",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Igneous_Rock_Pie_and_Cloudy_Quartz",
        "sex": "Male",
        "residence": "Pie Family Rock Farm, Rockville, Western Equestria",
        "occupation": "Rock farmer",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/4d\/Igneous_Rock_ID_S5E20.png\/revision\/latest?cb=20151110214811"
        ]
      },
      {
        "id": "8eeb06a0-76de-4ef4-bf90-01aeedf12800",
        "name": "Cloudy Quartz",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Igneous_Rock_Pie_and_Cloudy_Quartz",
        "sex": "Female",
        "residence": "Pie Family Rock Farm, Rockville, Western Equestria",
        "occupation": "Rock farmer",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/0\/09\/Cloudy_Quartz_ID_S5E20.png\/revision\/latest?cb=20151110214848"
        ]
      },
      {
        "id": "29cccc4b-30a4-42c6-a6ee-fe1d2b71c184",
        "name": "Maud Pie",
        "alias": "Maudileena Daisy Pie",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Maud_Pie",
        "sex": "Female",
        "residence": "Crystal cave near Ponyville (S7E4 onward)\nPie Family Rock Farm, Rockville, Western Equestria (until S7E4)",
        "occupation": "Geologist\nStand-up comedian",
        "kind": [
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/10\/Maud_Pie_ID_S4E18.png\/revision\/latest?cb=20140317163136",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/57\/Maud_Pie_filly_ID_S4E12.png\/revision\/latest?cb=20140204033601",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/b6\/Maud_Pie_Sombra_timeline_ID_S5E25.png\/revision\/latest?cb=20151202050814"
        ]
      },
      {
        "id": "70810003-6517-4b49-b5e4-39b64909f979",
        "name": "Mr. Shy",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Mr._and_Mrs._Shy",
        "sex": "Male",
        "residence": "Cloudsdale",
        "occupation": "Weather factory worker (formerly)",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/2\/2d\/Mr._Shy_ID_S6E11.png\/revision\/latest?cb=20160605103050"
        ]
      },
      {
        "id": "77363637-6e6c-4b23-a0b8-f17fb379d0ae",
        "name": "Mrs. Shy",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Mr._and_Mrs._Shy",
        "sex": "Female",
        "residence": "Cloudsdale",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/1a\/Mrs._Shy_ID_S6E11.png\/revision\/latest?cb=20160605103103"
        ]
      },
      {
        "id": "bfbb960a-e253-4e1f-8bd3-d5ab6a38bdf7",
        "name": "Zephyr Breeze",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Zephyr_Breeze",
        "sex": "Male",
        "residence": "Cloudsdale\nPonyville (briefly in S6E11)",
        "occupation": "Mane therapist\nSalonist at The Mane Event\nRoyal guard (briefly)",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/14\/Zephyr_Breeze_ID_S6E11.png\/revision\/latest?cb=20160605103015"
        ]
      },
      {
        "id": "5347291b-5719-4750-93ab-1810deb84fc8",
        "name": "Mr. Carrot Cake",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Mr._and_Mrs._Cake",
        "sex": "Male",
        "residence": "Ponyville",
        "occupation": "Confectioner & Baker",
        "kind": [
          "Human",
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/ea\/Mr._Cake_ID_S2E10.png\/revision\/latest?cb=20131029203445",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/8\/8f\/Mr._Cake_in_costume_ID_S2E4.png\/revision\/latest?cb=20150708195255",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/ce\/Mr._Carrot_Cake_ID_EG.png\/revision\/latest?cb=20130727071253"
        ]
      },
      {
        "id": "b3657362-01d6-4070-8745-07a5f9e1c39c",
        "name": "Mrs. Cup Cake",
        "alias": "Chiffon Swirl",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Mr._and_Mrs._Cake",
        "sex": "Female",
        "residence": "Ponyville",
        "occupation": "Confectioner & Baker",
        "kind": [
          "Human",
          "Earth"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/78\/Mrs._Cake_greeting_ID_S1E25.png\/revision\/latest?cb=20111201194348",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/1\/14\/Young_Chiffon_Swirl_ID_S7E13.png\/revision\/latest?cb=20170808010420",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/5\/56\/Mrs._Cake_in_costume_ID_S2E4.png\/revision\/latest?cb=20150708195308",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/40\/Mrs._Cake_ID_EG2.png\/revision\/latest?cb=20140609162703"
        ]
      },
      {
        "id": "89e0c7c1-baf8-4d6b-8756-b223ab299a6d",
        "name": "Pound Cake",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Pound_Cake_and_Pumpkin_Cake",
        "sex": "Male",
        "residence": "Sugarcube Corner, Ponyville",
        "kind": [
          "Pegasus"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/7\/73\/Pound_Cake_smiling_ID_S2E13.png\/revision\/latest?cb=20120117144123",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/c0\/Future_Pound_Cake_ID_S9E26.png\/revision\/latest?cb=20191013042043"
        ]
      },
      {
        "id": "99929ac0-24e9-4486-b4a1-97742822893e",
        "name": "Pumpkin Cake",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Pound_Cake_and_Pumpkin_Cake",
        "sex": "Female",
        "residence": "Sugarcube Corner, Ponyville",
        "kind": [
          "Unicorn"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/9\/94\/Pumpkin_Cake_smiling_ID_S2E13.png\/revision\/latest?cb=20120117144426",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e6\/Pumpkin_Cake_Alicorn_ID_S7E3.png\/revision\/latest?cb=20170426023504",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/40\/Future_Pumpkin_Cake_ID_S9E26.png\/revision\/latest?cb=20191013042146"
        ]
      },
      {
        "id": "71de5044-b3e2-4719-9cc9-f6878d08458e",
        "name": "Gallus",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Gallus",
        "sex": "Male",
        "residence": "Canterlot (S9E26)\nSchool of Friendship, Ponyville (seasons 8-9)\nGriffonstone (formerly)",
        "occupation": "Captain of the royal guard (S9E26)\nStudent at the School of Friendship (seasons 8-9)",
        "kind": [
          "Griffon"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/b\/bc\/Gallus_ID_S8E1.png\/revision\/latest?cb=20180328224846",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/c\/cc\/Future_Gallus_ID_S9E26.png\/revision\/latest?cb=20191013032321"
        ]
      },
      {
        "id": "2028383f-9233-49e5-ad7d-ff28942eaf35",
        "name": "Silverstream",
        "alias": "Silver Stream",
        "url": "https:\/\/mlp.fandom.com\/wiki\/Silverstream",
        "sex": "Female",
        "residence": "School of Friendship, Ponyville (as of S8E2)\nSeaquestria (formerly)",
        "occupation": "Student at the School of Friendship (seasons 8-9)",
        "kind": [
          "Hippogriff",
          "Seapony"
        ],
        "images": [
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/4\/45\/Silverstream_ID_S8E1.png\/revision\/latest?cb=20180329021441",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/e\/e3\/Silverstream_seapony_ID_S8E2.png\/revision\/latest?cb=20180329021515",
          "https:\/\/vignette.wikia.nocookie.net\/mlp\/images\/6\/67\/Future_Silverstream_ID_S9E26.png\/revision\/latest?cb=20191013044024"
        ]
      }
    ];

    // const heroes = [
    //   { id: 11, name: 'Twighlight Sparkle', avatar: 'twilight-sparkle.png' },
    //   { id: 12, name: 'Pinkie Pie', avatar: 'pinkie-pie.png' },
    //   { id: 13, name: 'Gummy', avatar: '' },
    //   { id: 14, name: 'Fluttershy', avatar: 'fluttershy.png' },
    //   { id: 15, name: 'Rainbow Dash', avatar: 'rainbow-dash.png' },
    //   { id: 16, name: 'Rarity', avatar: 'rarity.png' },
    //   { id: 17, name: 'Princess Celestia', avatar: '' },
    //   { id: 18, name: 'Applejack', avatar: 'applejack.png' },
    //   { id: 19, name: 'Princess Luna', avatar: '' },
    //   { id: 20, name: 'Spike', avatar: '' },
    //   { id: 21, name: 'Scootaloo', avatar: '' },
    //   { id: 22, name: 'Discord', avatar: '' },
    //   { id: 23, name: 'Sweetie Belle', avatar: '' },
    //   { id: 24, name: 'Shinning Armor', avatar: '' },
    //   { id: 25, name: 'Trixie', avatar: '' },
    //   { id: 26, name: 'Derpy Hooves', avatar: '' },
    //   { id: 27, name: 'Big McIntosh', avatar: '' },
    //   { id: 28, name: 'Snips', avatar: '' },
    //   { id: 29, name: 'Diamond Tiara', avatar: '' },
    //   { id: 30, name: 'Granny Smith', avatar: '' },
    //   { id: 31, name: 'Apple Bloom', avatar: '' },
    //   { id: 32, name: 'Babs Seed', avatar: '' },
    //   { id: 33, name: 'Goldie Delicious', avatar: '' },
    //   { id: 34, name: 'Maud Pie', avatar: '' },
    //   { id: 35, name: 'Filthy Rich', avatar: '' },
    //   { id: 36, name: 'Silver Spoon', avatar: '' },
    //   { id: 37, name: 'Pipsqueak', avatar: '' },
    //   { id: 38, name: 'Nightmare Moon', avatar: '' },
    //   { id: 39, name: 'King Sombra', avatar: '' },
    //   { id: 40, name: 'Gilda', avatar: '' },
    //   { id: 41, name: 'Daring Do', avatar: '' },
    //   { id: 42, name: 'Spitfire', avatar: '' },
    //   { id: 43, name: 'Star Swirl the Bearded', avatar: '' },
    //   { id: 44, name: 'Boneless', avatar: '' },
    //   { id: 45, name: 'Zecora', avatar: '' },
    //   { id: 46, name: 'Cranky Doodle Donkey', avatar: '' },
    //   { id: 47, name: 'Gilda', avatar: '' },
    //   { id: 48, name: 'Tank', avatar: '' },
    //   { id: 49, name: 'Angel', avatar: '' },
    //   { id: 50, name: 'Owlowiscious', avatar: '' },
    //   { id: 51, name: 'Opalescence', avatar: '' },
    //   { id: 52, name: 'Winona', avatar: '' }
    // ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Pony[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}

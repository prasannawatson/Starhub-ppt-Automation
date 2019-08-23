import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1 = 'starhub-report-automate';
  //For retail,hubtroopers and so on
  header = ["Retail", "Hubtroopers", "Product & Lifecycle", "StarHub EBG",
    "StarHub Online", "StarHub TeleSales", "Consumer Contact Center"
  ];
  table = [
    ["NPS", "Staff Satisfaction Breakdown",
      "Qualitative Analysis", "Store Performance & Rank"
    ],
    ["NPS", "Technician Satisfaction", "Qualitative Analysis"],
    ["NPS", "Overall Satisfaction", "Cable TV Metrics", "Mobile Metrics",
      "Broadband Metrics", "Qualitative Analysis"
    ],
    ["NPS", "Sales Person Satisfaction", "Qualitative Analysis"],
    ["NPS", "Overall Satisfaction", "Qualitative Analysis"],
    ["NPS", "Staff Satisfaction", "Qualitative Analysis"],
    ["NPS", "Agent NPS", "Qualitative Analysis"]
  ];
  //For single line chart
  data = [
    [92.8, 92.5, 93, 92.5, 92, 90.9, 92, 92.3, 92, 92.5, 93.1, 93.6],
    [29, 29.5, 30.3, 28, 31.8, 31.4, 26, 33.5, 34.3, 30.5, 33.9, 40.6],
    [88.4, 88.4, 88.4, 88, 89, 88.3, 87.2, 88.9, 88.8, 87.7, 86.3, 86.3],
    [-30.8, -31.6, -29.1, -29.2, -32.4, -24, -21.8, -28.6, -23.3, -24, -20.9, -17.5],
    [60.4, 63.2, 61.4, 61.8, 61.3, 63.7, 64.9, 61.3, 65.1, 63.9, 63.6, 65.1],
    [39.9, 45.1, 35.9, 43.9, 38.2, 51, 32.7, 21.5, 38, 28.9, 21.2, 22],
    [87.8, 87, 85.1, 83.3, 83.9, 87.4, 82, 81.8, 84.7, 83.1, 79.9, 81.5],
    [15.4, 14.8, -50, 24.3, 0, 12.7],
    [71, 76, 51.3, 72.7, 54.3, 73.6],
    [23.9, 28.1, 25.1, 25.7, 20, 24.9, 19.4, 26.8, 25.7, 25.2, 29.6, 32.2],
    [86.3, 86.4, 86.7, 86.2, 84.1, 84.9, 83.7, 86.7, 86.5, 86.3, 85.1, 85.4]
  ];
  categories = [
    ["Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18",
      "Jan-19", "Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19"
    ],
    ["Jan-19", "Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19"]
  ];
  title = [
    ["JUNE’19 STAFF SATISFACTION MONTHLY TRENDS",
      "Satisfaction scores continues the upward trend into June’19 to reach 93.6 points "
    ],
    ["JUNE’19 HUBTROOPERS TNPS MONTHLY TRENDS​",
      "NPS scores increased significantly to 40.6 points in June’19 from 33.9 in May 2019​"
    ],
    ["JUNE’19 HUBTROOPERS TECHNICIAN SAT MONTHLY TREND​",
      "The technician satisfaction scores continues to remain stable at 86.3 points​"
    ],
    ["JUNE’19 PLC NPS MONTHLY TRENDS​",
      "The overall PLC NPS performance continues to be very low despite an increase in June’19 to reach -17.5 pts​"
    ],
    ["JUNE’19 PLC OVERALL SATISFACTION MONTHLY TRENDS​",
      "In June, the overall satisfaction score increased from 63.6 in May to 65.1 ​"
    ],
    ["JUNE’19 EBG TNPS MONTHLY TRENDS​",
      "The NPS score increased in June’19 by 0.8 pts to reach 22 pts​"
    ],
    ["JUNE’19 EBG SALES PERSON SATISFACTION TRENDS​",
      "The satisfaction with the sales person has increased in June’19 to reach 81.47 points​"
    ],
    ["JUNE’19 ONLINE TNPS MONTHLY TRENDS​",
      "NPS increased in June’19 to reach 12.7 points​"
    ],
    ["JUNE’19 ONLINE OVERALL SATISFACTION TRENDS​",
      "Steep increased witnessed in June 2019 to reach 73.6 points​"
    ],
    ["JUNE’19 TELESALES TNPS MONTHLY TRENDS​",
      "Increase in NPS scores in June’19 to reach 32.2 points​"
    ],
    ["JUNE’19 TELESALES STAFF SATISFACTION TRENDS​",
      "Staff Satisfaction scores increased to reach 85.4 pts in June’19​"
    ]
  ];
  table_value = [
    ["Base",10867,10721,10847,12539,11483,11749,12900,9232,11242,10549,12912,13443],
    ["Base",3116,3061,3086,4160,5269,4875,3728,6484,6090,6090,2619,5815],
    ["Base",3557,3626,3586,3628,4837,5988,5664,4249,7363,6934,2959,6883],
    ["Base",616,586,577,554,454,463,501,583,484,1362,1682,1370],
    ["Base",717,660,667,649,527,521,578,659,553,1549,1833,1570],
    ["Base",148,144,145,114,136,100,101,79,121,121,85,91],
    ["Base",148,144,145,114,136,100,122,93,135,132,85,102],
    ["Base",78,54,24,37,30,1113],
    ["Base",78,54,24,37,30,1234],
    ["Base",836,764,819,825,1055,668,795,567,647,793,761,927],
    ["Base",1219,986,923,983,955,1225,819,985,672,943,908,1108]
  ];
  //For double line chart
  title2 = [ [ "JUNE’19 CABLE TV NPS & OVERALL SATISFACTION​",
                "Overall NPS as well as overall satisfaction scores for Cable TV have decreased in June’19​"],
             [ "JUNE’19 MOBILE NPS & OVERALL SATISFACTION​",
               "In June’19, NPS for Mobile segment increased from previous month to reach -7.3 points while a marginal rise was seen on the overall satisfaction (0.3 points)​"],
             [ "JUNE’19 BROADBAND NPS & OVERALL SATISFACTION​",
               "In June’19, both NPS and OSAT scores witnessed a rise compared to previous month​"],
             [ "JUNE’19 EBG TNPS BY TRANSACTION TYPE​",
               "While the NPS scores for New transactions increased marginally, decline in scores seen for Renewals​"]            
          ];
  data2 = [ [ [ -56.8, -44.1, -51.2, -44.4, -45.9, -44.5, -35.1, -44.8, -39.9, -35.7, -29.5, -34.2],
              [ 50.7, 56.9, 55.2, 54.8, 55.7, 56.4, 57.7, 52.9, 56.4, 59.8, 58.8, 57.1]
            ],
            [ [ -15.4, -25.2, -13.3, -15.2, -22.4, -11.2, -4.9, -19.4, -12, -7.9, -9.4, -7.3],
              [ 66, 66.3, 66.1, 67.4, 64.1, 67.5, 70.6, 65.7, 69.9, 66.8, 67.6, 67.9]
            ],
            [ [ -23.8, -26.6, -28, -32.1, -30.9, -20, -31.5, -21.4, -21.1, -23.8, -21.2, -9.6],
              [ 63.1, 65.9, 61, 61.9, 63.5, 65.3, 64.6, 64.9, 67.4, 65.8, 65.5, 69.1]
            ],
            [ [ 61.8, 48.5, 28.4, 44.3, 44.8, 54.2, 41.9, 29.3, 21.6, 29.3, 17.1, 14.7],
              [ 16.7, 39.7, 42.3, 42.3, 35.1, 45, 28.1, 13.2, 49.3, 28.6, 25, 25.5]
            ]
          ];
  values2 = [ [ "NPS", "Overall Sat"],
              [ "NPS", "Overall Sat"],
              [ "NPS", "Overall Sat"],
              [ "New", "Renewal"]
          ];
  table_value2 = [ [ [ "Base TNPS",192,186,168,169,148,137,154,201,148,502,586,476],
                     [ "Overall Sat",220,208,189,203,167,147,178,217,165,562,645,545] ],
                   [ [ "Base TNPS",242,242,235,217,183,176,204,242,184,355,436,382],
                     [ "Overall Sat",290,267,280,252,213,207,237,276,216,413,436,423] ],
                   [ [ "Base TNPS",182,158,174,168,123,150,143,140,152,505,680,512],
                     [ "Overall Sat",207,185,198,194,147,167,163,166165,574,752,601] ],
                   [ [ "Base New",75,76,68,67,61,58,43,41,51,58,41,34],
                     [ "Renewal",60,72,73,78,52,77,57,38,69,63,44,55] ]
                ];
  //For triple line chart
  title3 = [ [  "JUNE’19 HUBTROOPERS TNPS BY COMPANY​", 
                "Increase in NPS scores in June’19 for both Earnest Corporation as well as Planet Smart Services​"],
              [ "JUNE’19 TNPS BY ASSET​", 
                "While Consumer Online Store and My StarHub App NPS scores dropped, increase in scores seen for My Account Manager​"],
              [ "JUNE’19 OVERALL SATISFACTION BY ASSET​",
                "Increase in satisfaction scores witnessed for My Account Manager and Consumer Online store compared to the previous month​"]
          ];
  data3 = [ [ [31, 29.7, 32.9, 31.1, 32.1, 34.6, 29.4, 32.8, 33.9, 30.2, 34.4, 39.4], 
              [30, 32.3, 29.3, 26.9, 32.7, 28.2, 22.8, 35.4, 35.7, 31.7, 31.8, 42.3], 
              [24.1, 20.5, 11.1, 5.1, 10.5, 17.1, 3, 11.5, 22.1, 19.8, 10, 20.5] 
            ],
            [ [ -9.1, 0, -90, -57.1, -100, -13.6], 
              [ 6.9, 18.2, '-', 0, 33.3, 10.8], 
              [ 28.9, 22.2, -21.4, 48.1, 23.8, 16.9]
            ],
            [ [ 67.3, 62.1, 32, 57.1, 13.3, 50], 
              [ 70.7, 78.6, '-', 73.3, 76.7, 73.9], 
              [ 72.4, 83.3, 65, 76.7, 62.9, 74.4] 
            ]
          ];
  values3 = [ [ "Planet Smart services Pt. Ltd", "Earnest Corporation Pt. Ltd", "StarHub Ltd" ],
              [ "My Account Manager", "My StarHub App", "Customer Online Store" ],
              [ "My Account Manager", "My StarHub App", "Customer Online Store" ]
            ];

  //For slide 23 and 24
  table_23 = [ [ {"top_10_stores": "Changi T3 outlet", "TNPS": 87.6, "Vol": 1.13},
                 {"top_10_stores": "Esmart Tampines One", "TNPS": 84.4, "Vol": 0.74},
                 {"top_10_stores": "HOUGANG MALL", "TNPS": 84.2, "Vol": 0.66},
                 {"top_10_stores": "TeleInfo 930 Yishun Ave 2, #B1-03 North Point Shopping Centre, S(769098)", "TNPS": 78.6, "Vol": 1.3},
                 {"top_10_stores": "SH TM", "TNPS": 77.1, "Vol": 16.79},
                 {"top_10_stores": "CIPTLOT1", "TNPS": 77, "Vol": 1.31},
                 {"top_10_stores": "Planet Telecoms 1 Woodlands Square,Causeway Point,#03-(07to09),S(738099)", "TNPS": 76.8, "Vol": 9.16},
                 {"top_10_stores": "CIPT SUN PLAZA", "TNPS": 76, "Vol": 0.58},
                 {"top_10_stores": "BEDOK MALL", "TNPS": 74.3, "Vol": 1.94},
                 {"top_10_stores": "SH Waterway Point", "TNPS": 74.1, "Vol": 3.33},
              ],
              [  {"bottom_10_stores": "SH CIS RS Team 1", "TNPS": 60, "Vol": 0.06},
                 {"bottom_10_stores": "Esmart Mobile Hillion", "TNPS": 57.1, "Vol": 1.14},
                 {"bottom_10_stores": "CIPTROADSHOW", "TNPS": 53.3, "Vol": 0.17},
                 {"bottom_10_stores": "Esmart Mobile Junction8", "TNPS": 53.3, "Vol": 1.07},
                 {"bottom_10_stores": "TeleInfo AMK Hub, 53, Ang Mo Kio Ave 3, AMK Hub,  #02-57, S(569933)", "TNPS": 51.4, "Vol": 1.29},
                 {"bottom_10_stores": "Esmart Roadshow", "TNPS": 50, "Vol": 0.47},
                 {"bottom_10_stores": "CITIROADSHOW", "TNPS": 47.8, "Vol": 0.27},
                 {"bottom_10_stores": "Esmart Mobile West Mall", "TNPS": 46.9, "Vol": 0.57},
                 {"bottom_10_stores": "Esmart Mobile Compass one", "TNPS": 44.1, "Vol": 1.08},
                 {"bottom_10_stores": "SH CS Tele", "TNPS": 37.4, "Vol": 1.71},
              ]
            ];
  table_24 = [ [  {"top_10_stores": "Esmart Tampines One", "TNPS": 97.2, "Vol(%)": 0.74},
                  {"top_10_stores": "HOUGANG MALL", "TNPS": 96.7, "Vol(%)": 0.7},
                  {"top_10_stores": "Changi T3 outlet", "TNPS": 95.9, "Vol(%)": 1.01},
                  {"top_10_stores": "Planet Telecoms 1 Woodlands Square,Causeway Point,#03-(07to09),S(738099)", "TNPS": 95.3, "Vol(%)": 9.13},
                  {"top_10_stores": "Esmart Mobile Toa Payoh HDB Hub", "TNPS": 95, "Vol(%)": 0.72},
                  {"top_10_stores": "SH TM", "TNPS": 94.8, "Vol(%)": 16.23},
                  {"top_10_stores": "CIPT SUN PLAZA", "TNPS": 94.6, "Vol(%)": 0.56},
                  {"top_10_stores": "BEDOK MALL", "TNPS": 94.6, "Vol(%)": 1.97},
                  {"top_10_stores": "CIPTLOT1", "TNPS": 94.4, "Vol(%)": 1.23},
                  {"top_10_stores": "SH Waterway Point", "TNPS": 94.2, "Vol(%)": 3.33},
              ],
              [   {"bottom_10_stores": "CITICLEMENTI", "TNPS": 90.7, "Vol(%)": 1.05},
                  {"bottom_10_stores": "Esmart Roadshow", "TNPS": 90.4, "Vol(%)": 0.5},
                  {"bottom_10_stores": "TeleInfo AMK Hub, 53, Ang Mo Kio Ave 3, AMK Hub,  #02-57, S(569933)", "TNPS": 90.2, "Vol(%)": 1.33},
                  {"bottom_10_stores": "Esmart Mobile Compass one", "TNPS": 90.1, "Vol(%)": 1.11},
                  {"bottom_10_stores": "Esmart Mobile Hillion", "TNPS": 89.5, "Vol(%)": 1.13},
                  {"bottom_10_stores": "Esmart Mobile Junction8", "TNPS": 89.1, "Vol(%)": 1.11},
                  {"bottom_10_stores": "CITIROADSHOW", "TNPS": 89, "Vol(%)": 0.29},
                  {"bottom_10_stores": "SH CIS RS Team 1", "TNPS": 88.8, "Vol(%)": 0.08},
                  {"bottom_10_stores": "Esmart Mobile West Mall", "TNPS": 85.9, "Vol(%)": 0.59},
                  {"bottom_10_stores": "SH CS Tele", "TNPS": 85.7, "Vol(%)": 1.68},
              ]
       ];
  table_title = [ [ "JUNE’19 STORE BY PERFORMANCE - TNPS​", "Large variation in NPS scores across the top & bottom performers​"],
                  [ "JUNE’19 STORE BY PERFORMANCE – STAFF SATISFACTION​", "Planet Telecom 1 Woodlands and SH TM account for higher volume with high Staff Satisfaction score​"]
                ];
  //For slides 45,55,62,69
  title_dist = [ "JUNE’19 OVERALL TNPS PERFORMANCE BY DISTRICT​", "JUNE’19 CABLE TV TNPS PERFORMANCE BY DISTRICT​",
                 "JUNE’19 MOBILE TNPS PERFORMANCE BY DISTRICT​", "JUNE’19 BROADBAND TNPS PERFORMANCE BY DISTRICT​"];
  table_45 = [ [ {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                 {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1}
                ],
               [  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                  {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1}
               ],
               [{"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1}
               ],
               [{"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1},
                {"District": "Kampong Glam, Beach Road", "TNPS": 50, "n": 1}
              ]
            ]; 
            executiveSummaryList = [
              [
                "Retail",
          
                "Hubtroopers",
          
          
                "Product & Lifestyle",
          
                "StarHub EBG"
              ],
              [
                "StarHub Online",
                "StarHub Telesales",
                "Consumer Contact Centre",
              ]
            ]          
}

// Image
import HomeImage from "../assets/HomePage/Home.jpeg";
import PlumbingImage from "../assets/HomePage/plumbing.jpeg";
import ElectricalImage from "../assets/HomePage/electrical.jpeg";
import PaintingImage from "../assets/HomePage/Painting.jpeg";
import AcImage from "../assets/HomePage/Ac.jpeg";


const services =[

    {id: 1,
     name:"Home Cleaning",
     description: "Professional home cleaning service",
     image:HomeImage,
     price:"499",
     features: [
        "Experienced professionals",
        "Quality cleaning service",
        "Flexible booking slots",
               ],
      duration: "2-3 hours",
    },
    {id: 2,
     name:"Plumbing",
     image:PlumbingImage,
     price:"899",
     features: [
        "Leak detection and pipe repair",
        "Tap and faucet repair",
        "Drain blockage removal"
        ],
     duration:"1-2 hours"
    },
    {id: 3,
     name:"Ac service",
     image:AcImage,
     price:"599",
     features: [
            "AC filter cleaning",
            "Cooling performance inspection",
            "Basic AC maintenance"
            ],
     duration:"1-2 hours"
    },
    {id: 4,
     name:"Electrical",
     image:ElectricalImage,
     price:"799",
     features: [
            "Switch and socket repair",
            "Light and fan installation",
            "Electrical fault inspection"
            ],
     duration:"2-3 hours"
    },
    {id: 5,
     name:"Painting",
     image:PaintingImage,
     price:"699",
     features: [
        "Wall surface preparation",
        "Professional interior painting",
        "Neat and clean finishing"
        ],
     duration:"3-5 hours"
    },
];
export default services;
var APP_DATA = {
  "scenes": [
    {
      "id": "0-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.607061843779718,
        "pitch": 0.003282682911180501,
        "fov": 1.6257365617269903
      },
      "linkHotspots": [
        {
          "yaw": -1.1770183264870067,
          "pitch": 0.03635102741488083,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6024111304882478,
          "pitch": -0.06747824381460354,
          "title": "Welcome to the Unity Forma House.",
          "text": "This walk-through was created using Unity Forma and all 360 images batch exported using Render Studio.<div><br></div><div>Watch the&nbsp;<b>How to build a real-time 3D property configurator with Unity Forma </b>on-demand here:&nbsp;<a href=\"https://bit.ly/3gxETnl\" style=\"font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; background-color: rgba(58, 68, 84, 0.8);\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(17, 85, 204); background-color: transparent; font-weight: 400; font-variant-numeric: normal; font-variant-east-asian: normal; text-decoration-line: underline; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;\">https://bit.ly/3gxETnl</span></a></div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5889924008624448,
        "pitch": -0.04996525671605312,
        "fov": 1.6257365617269903
      },
      "linkHotspots": [
        {
          "yaw": -0.19996732287320285,
          "pitch": 0.07461693260095537,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.819259709900197,
          "pitch": 0.0899507142416276,
          "rotation": 0,
          "target": "0-courtyard"
        },
        {
          "yaw": 1.4394407737921213,
          "pitch": 0.13275095790686464,
          "rotation": 0,
          "target": "3-lounge"
        },
        {
          "yaw": 1.3077998816832448,
          "pitch": -0.1401919023110878,
          "rotation": 0,
          "target": "4-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7149876590267112,
          "pitch": 0.07441281571607306,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6805316277107654,
          "pitch": 0.028472809799056975,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7523119936590064,
          "pitch": 0.11470641936978865,
          "rotation": 0,
          "target": "5-bedroom"
        },
        {
          "yaw": -1.7840267325587185,
          "pitch": 0.33409055589227243,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5725923216422562,
          "pitch": 0.16040863093932423,
          "rotation": 0,
          "target": "4-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.007305939730320787,
          "pitch": 0.22922860329543937,
          "rotation": 0,
          "target": "4-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Unity Forma House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

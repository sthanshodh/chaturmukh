(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.IconButton_1E6D4667_0440_A2B3_418C_2D9AA0DB52D4",
  "this.Image_1EA491A9_0441_A1BE_417B_1ACBC70D319A",
  "this.Image_1EAEEBCA_0440_A1FD_417B_DE03A2F4CC31"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B345119_047C_E143_418B_A69791FE47E4",
 "initialSequence": "this.sequence_0B345119_047C_E143_418B_A69791FE47E4",
 "id": "camera_0B344119_047C_E143_4177_B138787779D3",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0AA200BC_047C_1F40_417D_BFAB07BD8D26",
 "initialSequence": "this.sequence_0AA200BC_047C_1F40_417D_BFAB07BD8D26",
 "id": "camera_0AA230BC_047C_1F40_4172_44D46BF5F551",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 08",
 "hfovMin": "135%",
 "id": "panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA",
 "overlays": [
  "this.overlay_0A5A630F_0440_A273_4165_46462DC45FA6",
  "this.overlay_16FB4F06_0441_E275_4160_D9A9878E1C22",
  "this.overlay_150D537F_0441_E293_4182_8766AD3101B0",
  "this.overlay_0AEAB6F6_0440_A395_4145_D08DF8E69118",
  "this.overlay_0A10A610_0443_A26E_4186_4CDF7FA07FCA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ED13D39_0441_669F_4187_F02B6B204296"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 09",
 "hfovMin": "135%",
 "id": "panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D",
 "overlays": [
  "this.overlay_0AF657F1_0440_E1AE_4174_C4595BD47434",
  "this.overlay_0A3081C0_0440_A1EE_4182_D96F24A43330",
  "this.overlay_0B49FD1F_0441_6693_4169_1F0914FAFDFB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 02",
 "hfovMin": "135%",
 "id": "panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480",
 "overlays": [
  "this.overlay_0A3492C2_0441_A3F2_4185_DB1BDB65507F",
  "this.overlay_0AAD6D96_0440_A195_4191_41ED3E7B816E",
  "this.overlay_0B068AE4_0447_A3B6_4190_A03C61903F49",
  "this.overlay_0B870297_0441_6393_4149_C3DECF9AAFF6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ED13D39_0441_669F_4187_F02B6B204296"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 07",
 "hfovMin": "135%",
 "id": "panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5",
 "overlays": [
  "this.overlay_09F97959_0443_AE9F_4189_CBB7AB6D6EC9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.02,
  "pitch": 11.02
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08EC61D5_047C_E0C0_4176_AFDC46A2833A",
 "initialSequence": "this.sequence_08EC61D5_047C_E0C0_4176_AFDC46A2833A",
 "id": "camera_08ED91D5_047C_E0C0_4186_006B7D67FB93",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0A15002F_047C_1F5F_418F_0173716BD6CA",
 "initialSequence": "this.sequence_0A15002F_047C_1F5F_418F_0173716BD6CA",
 "id": "camera_0A15202F_047C_1F5F_416E_56747E468BDB",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.41,
  "pitch": 7.35
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08E831E5_047C_E0C0_4156_F68A3E13F1F0",
 "initialSequence": "this.sequence_08E831E5_047C_E0C0_4156_F68A3E13F1F0",
 "id": "camera_08E821E5_047C_E0C0_4185_2EAA3453E0BA",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08E2C204_047C_E340_417D_BD4085451648",
 "initialSequence": "this.sequence_08E2C204_047C_E340_417D_BD4085451648",
 "id": "camera_08E2F204_047C_E340_4190_C75148456530",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.51,
  "pitch": -0.73
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0ABCE09D_047C_1F40_4163_0643A49509F0",
 "initialSequence": "this.sequence_0ABCE09D_047C_1F40_4163_0643A49509F0",
 "id": "camera_0ABC109D_047C_1F40_4187_40C555758EF4",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.02,
  "pitch": 13.22
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0A8020DB_047C_E0C7_4186_CFE3FB471064",
 "initialSequence": "this.sequence_0A8020DB_047C_E0C7_4186_CFE3FB471064",
 "id": "camera_0A8070DB_047C_E0C7_418B_724EC94CE5CF",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0BF8B148_047C_E1C1_417B_4251809D3463",
 "initialSequence": "this.sequence_0BF8B148_047C_E1C1_417B_4251809D3463",
 "id": "camera_0BF8D148_047C_E1C1_418C_8D220F083818",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0AEEB06E_047C_1FC0_417D_5BEC9CC48F4B",
 "initialSequence": "this.sequence_0AEEB06E_047C_1FC0_417D_5BEC9CC48F4B",
 "id": "camera_0AEEA06E_047C_1FC0_4177_994814CF6726",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 11",
 "hfovMin": "135%",
 "id": "panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69",
 "overlays": [
  "this.overlay_0A0C2589_0441_A67F_417D_BE53D1A37F76",
  "this.overlay_0A285A5F_0447_A293_4172_32779D6BCB26",
  "this.overlay_0A3414F8_0443_679D_415A_6EFBC8666B90",
  "this.overlay_1CD9A784_0441_E276_418A_15EFDC8167F3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC617D1_0441_61EF_417B_B5F921894A66"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.57,
  "pitch": 2.2
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0BBF3177_047C_E1CF_4178_DF5652FE3778",
 "initialSequence": "this.sequence_0BBF3177_047C_E1CF_4178_DF5652FE3778",
 "id": "camera_0BBF5177_047C_E1CF_418D_054C32CB7396",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 06",
 "hfovMin": "135%",
 "id": "panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D",
 "overlays": [
  "this.overlay_166FDBA8_0440_E1BE_4183_EB875145A42F",
  "this.overlay_0ACFA095_0441_9F97_4181_77B87FD1E8B0",
  "this.overlay_14E1CC84_0440_A675_418E_882552A96F6A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC617D1_0441_61EF_417B_B5F921894A66"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_1E6D4667_0440_A2B3_418C_2D9AA0DB52D4",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0ACCB08D_047C_1F40_4182_A2BF5BA059E6",
 "initialSequence": "this.sequence_0ACCB08D_047C_1F40_4182_A2BF5BA059E6",
 "id": "camera_0ACCD08D_047C_1F40_418E_3F39D64797E4",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 10",
 "hfovMin": "135%",
 "id": "panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52",
 "overlays": [
  "this.overlay_0A00732C_0441_62B5_417C_87BA17588182",
  "this.overlay_0AB2B20B_0441_A272_4157_E0A21E82C5B6",
  "this.overlay_0AC7E28E_0443_E272_4189_1733E47D0942"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.63,
  "pitch": -2.2
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0AB2E0AC_047C_1F41_4191_EFEA9DC9942C",
 "initialSequence": "this.sequence_0AB2E0AC_047C_1F41_4191_EFEA9DC9942C",
 "id": "camera_0AB200AC_047C_1F41_417F_0EBE6E0AA446",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.82,
  "pitch": -2.2
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08E671F4_047C_E0C1_418D_1FAC2B1D13EC",
 "initialSequence": "this.sequence_08E671F4_047C_E0C1_418D_1FAC2B1D13EC",
 "id": "camera_08E661F4_047C_E0C1_4167_5054EE9827AE",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B44110A_047C_E140_415E_F71FD28712D9",
 "initialSequence": "this.sequence_0B44110A_047C_E140_415E_F71FD28712D9",
 "id": "camera_0B44310A_047C_E140_418D_E03F5A3F4785",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 01",
 "hfovMin": "135%",
 "id": "panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0",
 "overlays": [
  "this.overlay_0A373B99_0441_619E_4184_BC2D6B7CABA0",
  "this.overlay_0BECA1D3_0441_6193_4173_2F988218B53E",
  "this.overlay_14AECD70_0441_A6AE_4183_30759C5A03B6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ED13D39_0441_669F_4187_F02B6B204296"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 04",
 "hfovMin": "135%",
 "id": "panorama_0ED13D39_0441_669F_4187_F02B6B204296",
 "overlays": [
  "this.overlay_0A6484C4_045F_A7F5_416D_1B35608EA9E5",
  "this.overlay_0A693B82_0440_A26D_4171_21C4A12E8858",
  "this.overlay_0AC40D42_0443_66ED_4174_9D191D8D7C3B",
  "this.overlay_164DBD55_0440_A697_4173_A3E2395FF17A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0A0B603F_047C_1F40_4174_B74E5AC22A47",
 "initialSequence": "this.sequence_0A0B603F_047C_1F40_4174_B74E5AC22A47",
 "id": "camera_0A08803F_047C_1F40_4190_1CEBAAE62ABE",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0BCF2168_047C_E1C0_4164_D60FF7DC6D96",
 "initialSequence": "this.sequence_0BCF2168_047C_E1C0_4164_D60FF7DC6D96",
 "id": "camera_0BCF7168_047C_E1C0_4153_4F831105F874",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.65,
  "pitch": 2.94
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0BE97158_047C_E1C0_4184_3CAF2B748B56",
 "initialSequence": "this.sequence_0BE97158_047C_E1C0_4184_3CAF2B748B56",
 "id": "camera_0BE96158_047C_E1C0_4190_EC4BAC5F5493",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0ED13D39_0441_669F_4187_F02B6B204296",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0ED13D39_0441_669F_4187_F02B6B204296_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0EC617D1_0441_61EF_417B_B5F921894A66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EC617D1_0441_61EF_417B_B5F921894A66_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69",
   "camera": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 67.59,
  "pitch": -1.47
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B76A0EB_047C_E0C0_4187_E8ED2AE1A2F2",
 "initialSequence": "this.sequence_0B76A0EB_047C_E0C0_4187_E8ED2AE1A2F2",
 "id": "camera_0B76C0EB_047C_E0C0_4190_B5849E4CF010",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0ED13D39_0441_669F_4187_F02B6B204296_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08DA4213_047C_E347_416B_646DE07F7C0F",
 "initialSequence": "this.sequence_08DA4213_047C_E347_416B_646DE07F7C0F",
 "id": "camera_08DA7213_047C_E347_4181_7929AEBA81BA",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.43,
  "pitch": 1.47
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0BD94168_047C_E1C0_4188_69842DB4E15C",
 "initialSequence": "this.sequence_0BD94168_047C_E1C0_4188_69842DB4E15C",
 "id": "camera_0BDE9168_047C_E1C0_4176_4E85022ABC00",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0A212020_047C_1F40_4188_C16C2D9F7D68",
 "initialSequence": "this.sequence_0A212020_047C_1F40_4188_C16C2D9F7D68",
 "id": "camera_0A214020_047C_1F40_4174_6DEAC08FE150",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72,
  "pitch": 3.67
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B6610FA_047C_E0C1_417E_8CE206B14A2B",
 "initialSequence": "this.sequence_0B6610FA_047C_E0C1_417E_8CE206B14A2B",
 "id": "camera_0B6600FA_047C_E0C1_416C_357BCBAFD69A",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08BEC233_047C_E340_4189_E18540040476",
 "initialSequence": "this.sequence_08BEC233_047C_E340_4189_E18540040476",
 "id": "camera_08BEF233_047C_E340_4167_0E2F611764A2",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B5670FA_047C_E0C1_415E_F94B6B8F69A1",
 "initialSequence": "this.sequence_0B5670FA_047C_E0C1_415E_F94B6B8F69A1",
 "id": "camera_0B5660FA_047C_E0C1_4191_0F106A60A343",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.22,
  "pitch": 1.47
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0AF8F04E_047C_1FC1_418E_43222108F640",
 "initialSequence": "this.sequence_0AF8F04E_047C_1FC1_418E_43222108F640",
 "id": "camera_0AF8E04E_047C_1FC1_4180_9899AB4D9E36",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 05",
 "hfovMin": "135%",
 "id": "panorama_0EC617D1_0441_61EF_417B_B5F921894A66",
 "overlays": [
  "this.overlay_0A260F1B_044F_E293_418E_5A609C36920F",
  "this.overlay_0BCBF152_0440_BEED_4172_DB098062EC10"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B088139_047C_E140_418C_2C73C64D757B",
 "initialSequence": "this.sequence_0B088139_047C_E140_418C_2C73C64D757B",
 "id": "camera_0B08B139_047C_E140_4186_771779E6088D",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0EC617D1_0441_61EF_417B_B5F921894A66_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.18,
  "pitch": -3.67
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08D39213_047C_E347_4189_4D68F477E031",
 "initialSequence": "this.sequence_08D39213_047C_E347_4189_4D68F477E031",
 "id": "camera_08D38213_047C_E347_4172_0DDAB8D2BAF5",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0A90A0CB_047C_E0C7_4190_70D016E2E427",
 "initialSequence": "this.sequence_0A90A0CB_047C_E0C7_4190_70D016E2E427",
 "id": "camera_0A90C0CB_047C_E0C7_4165_BBF830B5083D",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_08C72223_047C_E347_416E_3C26968E6903",
 "initialSequence": "this.sequence_08C72223_047C_E347_416E_3C26968E6903",
 "id": "camera_08C75223_047C_E347_4188_9473FD85C8DD",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.88,
  "pitch": -45.55
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B2AD129_047C_E143_4177_4FC5F8B63BA8",
 "initialSequence": "this.sequence_0B2AD129_047C_E143_4177_4FC5F8B63BA8",
 "id": "camera_0B2AC129_047C_E143_4184_23BF62B3DAD0",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 2.66
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_camera",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0BADE187_047C_E140_4190_0924498C0E85",
 "initialSequence": "this.sequence_0BADE187_047C_E140_4190_0924498C0E85",
 "id": "camera_0BAD1187_047C_E140_416A_D217BA573389",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.82,
  "pitch": 8.08
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0ADEE07D_047C_1FC3_4179_A89A1ED18FF9",
 "initialSequence": "this.sequence_0ADEE07D_047C_1FC3_4179_A89A1ED18FF9",
 "id": "camera_0ADE007D_047C_1FC3_417E_108F740BCE81",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.92,
  "pitch": -0.73
 },
 "timeToIdle": 5000,
 "idleSequence": "this.sequence_0B1AA129_047C_E143_418A_CF07170C93B6",
 "initialSequence": "this.sequence_0B1AA129_047C_E143_418A_CF07170C93B6",
 "id": "camera_0B1AC129_047C_E143_4189_8EB90719AD15",
 "manualRotationSpeed": 600,
 "automaticZoomSpeed": 10
},
{
 "fontColor": "#FFFFFF",
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 07",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 01",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 02",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 03",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 04",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 05",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 06",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 08",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 09",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 10",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "01. Chaturmukh 360 11",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "label": "Media",
 "id": "Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01. Chaturmukh 360 03",
 "hfovMin": "135%",
 "id": "panorama_0ECDA2AC_0441_63B6_4161_C74D65739499",
 "overlays": [
  "this.overlay_0A0102AF_0441_63B2_4188_1014233AC784",
  "this.overlay_0981B406_0440_A675_4183_EE60AA976072",
  "this.overlay_0A719A7E_0441_E292_418E_2C4DD22DB1CB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ED13D39_0441_669F_4187_F02B6B204296"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0A341000_047C_1F41_417C_7A5C9CA00C00",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_t.jpg",
 "hfovMax": 130
},
{
 "id": "MainViewer",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_1E6D4667_0440_A2B3_418C_2D9AA0DB52D4",
 "width": 56.45,
 "backgroundOpacity": 0,
 "right": "1.46%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "2.83%",
 "height": 57.2,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_1E6D4667_0440_A2B3_418C_2D9AA0DB52D4.png",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton12329"
 },
 "cursor": "hand"
},
{
 "maxHeight": 512,
 "maxWidth": 768,
 "id": "Image_1EA491A9_0441_A1BE_417B_1ACBC70D319A",
 "left": "1.63%",
 "width": "7.975%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1EA491A9_0441_A1BE_417B_1ACBC70D319A.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "2.69%",
 "height": "9.871%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image41265"
 }
},
{
 "maxHeight": 947,
 "maxWidth": 947,
 "id": "Image_1EAEEBCA_0440_A1FD_417B_DE03A2F4CC31",
 "width": "10.518%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_1EAEEBCA_0440_A1FD_417B_DE03A2F4CC31.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "0%",
 "height": "14.049%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image41355"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B345119_047C_E143_418B_A69791FE47E4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0AA200BC_047C_1F40_417D_BFAB07BD8D26",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D, this.camera_08E2F204_047C_E340_4190_C75148456530); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.66,
   "hfov": 14.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2600AB2C_0440_A2B6_4140_1AE736DED8EC",
   "pitch": -19.59,
   "yaw": 36.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.15,
   "distance": 100
  }
 ],
 "id": "overlay_0A5A630F_0440_A273_4165_46462DC45FA6",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52, this.camera_08DA7213_047C_E347_4181_7929AEBA81BA); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.84,
   "hfov": 15.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26037B2C_0440_A2B6_417C_B007BA017A44",
   "pitch": -29.22,
   "yaw": 48.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.87,
   "distance": 50
  }
 ],
 "id": "overlay_16FB4F06_0441_E275_4160_D9A9878E1C22",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499, this.camera_08C75223_047C_E347_4188_9473FD85C8DD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.42,
   "hfov": 14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2603DB2C_0440_A2B6_4162_C6579BEE066D",
   "pitch": -28.29,
   "yaw": -47.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.17,
   "distance": 50
  }
 ],
 "id": "overlay_150D537F_0441_E293_4182_8766AD3101B0",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_08D38213_047C_E347_4172_0DDAB8D2BAF5); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.68,
   "hfov": 10.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.19
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2603AB2C_0440_A2B6_4183_00AC0630C204",
   "pitch": -21.19,
   "yaw": 0.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_0AEAB6F6_0440_A395_4145_D08DF8E69118",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ED13D39_0441_669F_4187_F02B6B204296, this.camera_08BEF233_047C_E340_4167_0E2F611764A2); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.74,
   "hfov": 17.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.31
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26027B2C_0440_A2B6_4174_4105C9A6B60B",
   "pitch": -47.31,
   "yaw": 165.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.92,
   "distance": 50
  }
 ],
 "id": "overlay_0A10A610_0443_A26E_4186_4CDF7FA07FCA",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52, this.camera_0B2AC129_047C_E143_4184_23BF62B3DAD0); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.98,
   "hfov": 25.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2602DB2C_0440_A2B6_418D_90E4B74829E2",
   "pitch": -40.62,
   "yaw": -53.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.01,
   "distance": 50
  }
 ],
 "id": "overlay_0AF657F1_0440_E1AE_4174_C4595BD47434",
 "data": {
  "label": "Arrow 06b Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.52,
   "hfov": 11.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.93
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2602AB2C_0440_A2B6_4181_C28AE23506A0",
   "pitch": -16.93,
   "yaw": -13.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.61,
   "distance": 100
  }
 ],
 "id": "overlay_0A3081C0_0440_A1EE_4182_D96F24A43330",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_0B1AC129_047C_E143_4189_8EB90719AD15); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.56,
   "hfov": 20.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26055B2C_0440_A2B6_4171_4D0BED937F14",
   "pitch": -27.02,
   "yaw": 50.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.03,
   "distance": 50
  }
 ],
 "id": "overlay_0B49FD1F_0441_6693_4169_1F0914FAFDFB",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ED13D39_0441_669F_4187_F02B6B204296, this.camera_0BAD1187_047C_E140_416A_D217BA573389); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.1,
   "hfov": 7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.52
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261C9B2C_0440_A2B6_4187_34CD0E4B8F80",
   "pitch": -1.52,
   "yaw": -26.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7,
   "distance": 50
  }
 ],
 "id": "overlay_0A3492C2_0441_A3F2_4185_DB1BDB65507F",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_0BBF5177_047C_E1CF_418D_054C32CB7396); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.41,
   "hfov": 13.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.41
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261F0B2C_0440_A2B6_418E_DFED90EBB3E6",
   "pitch": -10.41,
   "yaw": 44.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.39,
   "distance": 50
  }
 ],
 "id": "overlay_0AAD6D96_0440_A195_4191_41ED3E7B816E",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52, this.camera_0BCF7168_047C_E1C0_4153_4F831105F874); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.89,
   "hfov": 6.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261FCB2C_0440_A2B6_4178_C2ACDA7CE6F8",
   "pitch": -3.8,
   "yaw": -16.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95,
   "distance": 50
  }
 ],
 "id": "overlay_0B068AE4_0447_A3B6_4190_A03C61903F49",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D, this.camera_0BDE9168_047C_E1C0_4176_4E85022ABC00); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.59,
   "hfov": 6.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261FAB2C_0440_A2B6_4156_EE85EAFA21DA",
   "pitch": -4.95,
   "yaw": 22.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.22,
   "distance": 50
  }
 ],
 "id": "overlay_0B870297_0441_6393_4149_C3DECF9AAFF6",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D, this.camera_0B76C0EB_047C_E0C0_4190_B5849E4CF010); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.4,
   "hfov": 5.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.77
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2600CB2C_0440_A2B6_4170_B8ABDC6C56DC",
   "pitch": -5.77,
   "yaw": 44.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.79,
   "distance": 100
  }
 ],
 "id": "overlay_09F97959_0443_AE9F_4189_CBB7AB6D6EC9",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08EC61D5_047C_E0C0_4176_AFDC46A2833A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0A15002F_047C_1F5F_418F_0173716BD6CA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08E831E5_047C_E0C0_4156_F68A3E13F1F0",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08E2C204_047C_E340_417D_BD4085451648",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0ABCE09D_047C_1F40_4163_0643A49509F0",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0A8020DB_047C_E0C7_4186_CFE3FB471064",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0BF8B148_047C_E1C1_417B_4251809D3463",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0AEEB06E_047C_1FC0_417D_5BEC9CC48F4B",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC617D1_0441_61EF_417B_B5F921894A66, this.camera_0ADE007D_047C_1FC3_417E_108F740BCE81); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.26,
   "hfov": 14.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2604CB2C_0440_A2B6_4188_FD0E6FD043EA",
   "pitch": -7.99,
   "yaw": -102.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.33,
   "distance": 100
  }
 ],
 "id": "overlay_0A0C2589_0441_A67F_417D_BE53D1A37F76",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D, this.camera_0ACCD08D_047C_1F40_418E_3F39D64797E4); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.33,
   "hfov": 17.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26074B2C_0440_A2B6_4189_9C88893FD67B",
   "pitch": 4.12,
   "yaw": -43.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.94,
   "distance": 50
  }
 ],
 "id": "overlay_0A285A5F_0447_A293_4172_32779D6BCB26",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499, this.camera_0AEEA06E_047C_1FC0_4177_994814CF6726); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.95,
   "hfov": 8.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26077B2C_0440_A2B6_418B_86A4309E3F74",
   "pitch": -5.47,
   "yaw": 126.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.39,
   "distance": 100
  }
 ],
 "id": "overlay_0A3414F8_0443_679D_415A_6EFBC8666B90",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D, this.camera_0AF8E04E_047C_1FC1_4180_9899AB4D9E36); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.08,
   "hfov": 15.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2607CB2C_0440_A2B6_4181_5543DC20EB8F",
   "pitch": -0.55,
   "yaw": 86.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.22,
   "distance": 100
  }
 ],
 "id": "overlay_1CD9A784_0441_E276_418A_15EFDC8167F3",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0BBF3177_047C_E1CF_4178_DF5652FE3778",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_08ED91D5_047C_E0C0_4186_006B7D67FB93); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.63,
   "hfov": 8.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26035B2C_0440_A2B6_4191_302C1D886CC3",
   "pitch": -5.82,
   "yaw": 71.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.32,
   "distance": 50
  }
 ],
 "id": "overlay_166FDBA8_0440_E1BE_4183_EB875145A42F",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC617D1_0441_61EF_417B_B5F921894A66, this.camera_08E821E5_047C_E0C0_4185_2EAA3453E0BA); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.92,
   "hfov": 8.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.35
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26032B2C_0440_A2B6_4180_DF89055B5CA9",
   "pitch": -6.35,
   "yaw": 141.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.38,
   "distance": 100
  }
 ],
 "id": "overlay_0ACFA095_0441_9F97_4181_77B87FD1E8B0",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5, this.camera_08E661F4_047C_E0C1_4167_5054EE9827AE); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.08,
   "hfov": 12.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26000B2C_0440_A2B6_4173_5D64FB2D842D",
   "pitch": -7.82,
   "yaw": -22.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.99,
   "distance": 50
  }
 ],
 "id": "overlay_14E1CC84_0440_A675_418E_882552A96F6A",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0ACCB08D_047C_1F40_4182_A2BF5BA059E6",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480, this.camera_0BF8D148_047C_E1C1_418C_8D220F083818); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.96,
   "hfov": 14.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.81
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26053B2C_0440_A2B6_4188_6D07C0458D8E",
   "pitch": -15.81,
   "yaw": 108.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.72,
   "distance": 100
  }
 ],
 "id": "overlay_0A00732C_0441_62B5_417C_87BA17588182",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_0BE96158_047C_E1C0_4190_EC4BAC5F5493); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.04,
   "hfov": 11.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.81
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26058B2C_0440_A2B6_418B_A7F976BD7EC4",
   "pitch": -15.81,
   "yaw": 47.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.02,
   "distance": 100
  }
 ],
 "id": "overlay_0AB2B20B_0441_A272_4157_E0A21E82C5B6",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D, this.camera_0B08B139_047C_E140_4186_771779E6088D); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.47,
   "hfov": 16.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26047B2C_0440_A2B6_418D_98AC3F6AAE21",
   "pitch": -26.48,
   "yaw": -6.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.28,
   "distance": 100
  }
 ],
 "id": "overlay_0AC7E28E_0443_E272_4189_1733E47D0942",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0AB2E0AC_047C_1F41_4191_EFEA9DC9942C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08E671F4_047C_E0C1_418D_1FAC2B1D13EC",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B44110A_047C_E140_415E_F71FD28712D9",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499, this.camera_0A15202F_047C_1F5F_416E_56747E468BDB); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.72,
   "hfov": 14.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.76
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261DFB2C_0440_A2B6_4165_F52012487E27",
   "pitch": -11.76,
   "yaw": 38.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.7,
   "distance": 100
  }
 ],
 "id": "overlay_0A373B99_0441_619E_4184_BC2D6B7CABA0",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ED13D39_0441_669F_4187_F02B6B204296, this.camera_0A08803F_047C_1F40_4190_1CEBAAE62ABE); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.46,
   "hfov": 12.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261C6B2C_0440_A2B6_4191_174181A1048F",
   "pitch": -13.56,
   "yaw": 139.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.92,
   "distance": 100
  }
 ],
 "id": "overlay_0BECA1D3_0441_6193_4173_2F988218B53E",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA, this.camera_0A214020_047C_1F40_4174_6DEAC08FE150); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.52,
   "hfov": 8.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.94
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261CCB2C_0440_A2B6_4176_33CA9AAD6296",
   "pitch": -6.94,
   "yaw": 113.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.85,
   "distance": 50
  }
 ],
 "id": "overlay_14AECD70_0441_A6AE_4183_30759C5A03B6",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ECDA2AC_0441_63B6_4161_C74D65739499, this.camera_0B44310A_047C_E140_418D_E03F5A3F4785); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.2,
   "hfov": 8.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.17
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26017B2C_0440_A2B6_418D_EA54EC47E323",
   "pitch": -8.17,
   "yaw": -50.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6,
   "distance": 100
  }
 ],
 "id": "overlay_0A6484C4_045F_A7F5_416D_1B35608EA9E5",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0, this.camera_0B6600FA_047C_E0C1_416C_357BCBAFD69A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.27,
   "hfov": 14.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2601CB2C_0440_A2B6_4175_88926E0EC756",
   "pitch": -13.82,
   "yaw": -89.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.58,
   "distance": 100
  }
 ],
 "id": "overlay_0A693B82_0440_A26D_4171_21C4A12E8858",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480, this.camera_0B5660FA_047C_E0C1_4191_0F106A60A343); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.4,
   "hfov": 7.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26019B2C_0440_A2B6_418F_518FD62F51CC",
   "pitch": -1.29,
   "yaw": 42.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.47,
   "distance": 50
  }
 ],
 "id": "overlay_0AC40D42_0443_66ED_4174_9D191D8D7C3B",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA, this.camera_0B344119_047C_E143_4177_B138787779D3); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.14,
   "hfov": 11.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26007B2C_0440_A2B6_418A_801028BEB7DC",
   "pitch": -7.42,
   "yaw": 1.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.56,
   "distance": 100
  }
 ],
 "id": "overlay_164DBD55_0440_A697_4173_A3E2395FF17A",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0A0B603F_047C_1F40_4174_B74E5AC22A47",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0BCF2168_047C_E1C0_4164_D60FF7DC6D96",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0BE97158_047C_E1C0_4184_3CAF2B748B56",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B76A0EB_047C_E0C0_4187_E8ED2AE1A2F2",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08DA4213_047C_E347_416B_646DE07F7C0F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0BD94168_047C_E1C0_4188_69842DB4E15C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0A212020_047C_1F40_4188_C16C2D9F7D68",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B6610FA_047C_E0C1_417E_8CE206B14A2B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08BEC233_047C_E340_4189_E18540040476",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B5670FA_047C_E0C1_415E_F94B6B8F69A1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0AF8F04E_047C_1FC1_418E_43222108F640",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_0A8070DB_047C_E0C7_418B_724EC94CE5CF); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.61,
   "hfov": 4.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26003B2C_0440_A2B6_417D_5EFCC403F222",
   "pitch": 7.74,
   "yaw": -19.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.22,
   "distance": 100
  }
 ],
 "id": "overlay_0A260F1B_044F_E293_418E_5A609C36920F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D, this.camera_0A90C0CB_047C_E0C7_4165_BBF830B5083D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.97,
   "hfov": 3.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 25,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.5
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 70,
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.5,
   "hfov": 3.35
  }
 ],
 "id": "overlay_0BCBF152_0440_BEED_4172_DB098062EC10",
 "data": {
  "label": "Image"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B088139_047C_E140_418C_2C73C64D757B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08D39213_047C_E347_4189_4D68F477E031",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0A90A0CB_047C_E0C7_4190_70D016E2E427",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_08C72223_047C_E347_416E_3C26968E6903",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B2AD129_047C_E143_4177_4FC5F8B63BA8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0BADE187_047C_E140_4190_0924498C0E85",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0ADEE07D_047C_1FC3_4179_A89A1ED18FF9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 2.66
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_0B1AA129_047C_E143_418A_CF07170C93B6",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0ED13D39_0441_669F_4187_F02B6B204296, this.camera_0AA230BC_047C_1F40_4172_44D46BF5F551); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.55,
   "hfov": 11.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261E7B2C_0440_A2B6_4170_11217BF26440",
   "pitch": -9.4,
   "yaw": 39.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.44,
   "distance": 100
  }
 ],
 "id": "overlay_0A0102AF_0441_63B2_4188_1014233AC784",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69, this.camera_0AB200AC_047C_1F41_417F_0EBE6E0AA446); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.68,
   "hfov": 8.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261EDB2C_0440_A2B6_4174_58694DD074F0",
   "pitch": -9.85,
   "yaw": -39.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.88,
   "distance": 50
  }
 ],
 "id": "overlay_0981B406_0440_A675_4183_EE60AA976072",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0, this.camera_0ABC109D_047C_1F40_4187_40C555758EF4); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.97,
   "hfov": 19.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_261EAB2C_0440_A2B6_4157_1C8C384E74CC",
   "pitch": -13.75,
   "yaw": 90.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.12,
   "distance": 100
  }
 ],
 "id": "overlay_0A719A7E_0441_E292_418E_2C4DD22DB1CB",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2600AB2C_0440_A2B6_4140_1AE736DED8EC",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_26037B2C_0440_A2B6_417C_B007BA017A44",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2603DB2C_0440_A2B6_4162_C6579BEE066D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2603AB2C_0440_A2B6_4183_00AC0630C204",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC6D7BC_0441_A196_4180_C4480AE22ADA_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26027B2C_0440_A2B6_4174_4105C9A6B60B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_2602DB2C_0440_A2B6_418D_90E4B74829E2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2602AB2C_0440_A2B6_4181_C28AE23506A0",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC421A5_0441_E1B7_4190_7F9A99B46E5D_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_26055B2C_0440_A2B6_4171_4D0BED937F14",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_261C9B2C_0440_A2B6_4187_34CD0E4B8F80",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_261F0B2C_0440_A2B6_418E_DFED90EBB3E6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261FCB2C_0440_A2B6_4178_C2ACDA7CE6F8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E2B6872_0440_AE92_418A_A0B71C1AB480_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261FAB2C_0440_A2B6_4156_EE85EAFA21DA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ECF0C91_0441_A66F_4181_2D246AEE18A5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2600CB2C_0440_A2B6_4170_B8ABDC6C56DC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2604CB2C_0440_A2B6_4188_FD0E6FD043EA",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_26074B2C_0440_A2B6_4189_9C88893FD67B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26077B2C_0440_A2B6_418B_86A4309E3F74",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC59870_0441_EEAD_4189_4BA0FB435C69_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2607CB2C_0440_A2B6_4181_5543DC20EB8F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26035B2C_0440_A2B6_4191_302C1D886CC3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26032B2C_0440_A2B6_4180_DF89055B5CA9",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E3BF1EE_0441_A1B2_418B_487C45105E1D_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26000B2C_0440_A2B6_4173_5D64FB2D842D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26053B2C_0440_A2B6_4188_6D07C0458D8E",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26058B2C_0440_A2B6_418B_A7F976BD7EC4",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC7AD89_0441_E67F_4175_BACB44D8BD52_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_26047B2C_0440_A2B6_418D_98AC3F6AAE21",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261DFB2C_0440_A2B6_4165_F52012487E27",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261C6B2C_0440_A2B6_4191_174181A1048F",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0F335A60_0440_A2AD_4175_0E1171A2E8F0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261CCB2C_0440_A2B6_4176_33CA9AAD6296",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26017B2C_0440_A2B6_418D_EA54EC47E323",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2601CB2C_0440_A2B6_4175_88926E0EC756",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_26019B2C_0440_A2B6_418F_518FD62F51CC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ED13D39_0441_669F_4187_F02B6B204296_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_26007B2C_0440_A2B6_418A_801028BEB7DC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0EC617D1_0441_61EF_417B_B5F921894A66_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_26003B2C_0440_A2B6_417D_5EFCC403F222",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261E7B2C_0440_A2B6_4170_11217BF26440",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261EDB2C_0440_A2B6_4174_58694DD074F0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ECDA2AC_0441_63B6_4161_C74D65739499_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_261EAB2C_0440_A2B6_4157_1C8C384E74CC",
 "frameCount": 22
}],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "class": "Player",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Player485"
 },
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

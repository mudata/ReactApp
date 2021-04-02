import React from "react";

export default function Template2( name, breakfast, capacity, pets, price, size, slug, type,featured,description) {
    console.log(breakfast)
    return {
        "fields": {
                "breakfast": breakfast,
                "capacity": capacity,
                "description": description,
                "extras": [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                "featured": featured,
                "images": [
                    {
                        "fields": {
                            "file": {
                                "url": "https://images.ctfassets.net/48t1s0p1dk0p/6N0wwClSdK0RmWJUlewHkm/ab7393376277f69adafe62eed0ba2bb4/details-2.jpeg"
                            }
                        }
                    },
                    {
                        "fields": {
                            "file": {
                                "url": "https://images.ctfassets.net/48t1s0p1dk0p/6N0wwClSdK0RmWJUlewHkm/ab7393376277f69adafe62eed0ba2bb4/details-2.jpeg"
                            }
                        }
                    },
                    {
                        "fields": {
                            "file": {
                                "url": "https://images.ctfassets.net/48t1s0p1dk0p/7hpKpJqDeylKyBIc86whAy/709ac62f6e2992fa913575dfdee90650/details-3.jpeg"
                            }
                        }
                    },
                    {
                        "fields": {
                            "file": {
                                "url": "https://images.ctfassets.net/48t1s0p1dk0p/27C2a1I22kX85LqKtZbwNJ/f6d812de02f160f0ed94e9712a09207d/details-4.jpeg"
                            }
                        }
                    }
                ],
                "name": name,
                "pets": pets,
                "price": price,
                "size": size,
                "slug": slug,
                "type": type
                
            }
    }
}
        
        
    
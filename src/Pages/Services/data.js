const generateLink = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
}

export const content = [
    {
        "img": `/images/AirConditioner/9.png`,
        "mainImg": `/images/AirConditioner/10.png`,
    "title": "Air Conditioning",
    "subtitle": "Stay Comfortable Year-Round with Premier AC Services",
    "description": "Our experts thoroughly inspect your AC unit to identify any problems. After the inspection, you will receive a detailed quote outlining the required parts, labor duration, and any necessary repairs to the units. Once you approve the quote, our technicians will visit your home with specialized equipment to fix the issues, ensuring your home air is fresher and cleaner than ever before.",
        "services": [
            {
                "title": "Disinfection",
                "description": "We clean and disinfect vents, filters, and drainage lines to remove bacteria and allergens, ensuring healthy air.",
                "icon": "/images/AirConditioner/1.png"
            },
            {
                "title": "Cooling Efficiency",
                "description": "Our specialists evaluate and optimize your AC's cooling performance, reducing energy costs.",
                "icon": "/images/AirConditioner/2.png"
            },
            {
                "title": "Fan & Coil Inspection",
                "description": "We inspect the fan motor, blower, and evaporator coil to ensure they function correctly, preventing breakdowns.",
                "icon": "/images/AirConditioner/3.png"
            },
            {
                "title": "Duct & Air Flow",
                "description": "We inspect ducts and balance air flow to ensure even cooling and improved system efficiency.",
                "icon": "/images/AirConditioner/4.png"
            },
            {
                "title": "Thermostat Check",
                "description": "We verify your thermostat's functionality to ensure accurate temperature control and energy efficiency.",
                "icon": "/images/AirConditioner/5.png"
            },
            {
                "title": "Tray & Coil Cleaning",
                "description": "We clean drip trays and condenser coils to prevent water damage and ensure efficient operation.",
                "icon": "/images/AirConditioner/6.png"
            },
            {
                "title": "Gas Top-Up",
                "description": "We check and top up refrigerant levels to maintain optimal cooling and system performance.",
                "icon": "/images/AirConditioner/7.png"
            },
            {
                "title": "Electrical Check",
                "description": "We inspect all electrical connections for safety and reliability, ensuring the safe operation of your AC system.",
                "icon": "/images/AirConditioner/8.png"
            }
        ],   
    "footer": "Trust our skilled technicians to handle all your AC needs with professionalism and expertise. Schedule your free AC check-up today and experience the difference of top-quality service.",
    "bookTitle": "Is Your AC Ready for the Heat?",
    "bookDescription": "Get a free AC check-up and tailored maintenance quote.",
    "link": generateLink("Air Conditioning")
}];
export interface FleetVehicle {
  name: string;
  category: string;
  description: string;
  image: string;
  capacity: number;
  fuel: string;
  transmission: string;
  year: string;
  features: string[];
  pricePerDay: number;
  rating: number;
}

export const fleetData: FleetVehicle[] = [
  {
    name: "Toyota Avanza",
    category: "MPV Keluarga",
    description:
      "Mobil keluarga terpopuler dengan kenyamanan dan efisiensi bahan bakar terbaik",
    image: "/placeholder.svg?height=300&width=400&text=Toyota+Avanza",
    capacity: 7,
    fuel: "Bensin",
    transmission: "Manual/Matic",
    year: "2022-2023",
    features: ["AC", "Audio System", "Power Steering", "Central Lock"],
    pricePerDay: 350000,
    rating: 4.8,
  },
  {
    name: "Toyota Innova",
    category: "MPV Premium",
    description:
      "Kendaraan premium dengan kenyamanan maksimal untuk perjalanan bisnis dan keluarga",
    image: "/placeholder.svg?height=300&width=400&text=Toyota+Innova",
    capacity: 8,
    fuel: "Bensin/Diesel",
    transmission: "Manual/Matic",
    year: "2022-2023",
    features: ["AC", "Audio System", "Power Steering", "Airbag", "ABS"],
    pricePerDay: 500000,
    rating: 4.9,
  },
  {
    name: "Daihatsu Xenia",
    category: "MPV Ekonomis",
    description: "Pilihan ekonomis dengan fitur lengkap untuk kebutuhan harian",
    image: "/placeholder.svg?height=300&width=400&text=Daihatsu+Xenia",
    capacity: 7,
    fuel: "Bensin",
    transmission: "Manual/Matic",
    year: "2021-2022",
    features: ["AC", "Audio System", "Power Steering", "Central Lock"],
    pricePerDay: 300000,
    rating: 4.6,
  },
  {
    name: "Mitsubishi Pajero Sport",
    category: "SUV Premium",
    description:
      "SUV tangguh untuk petualangan dengan performa off-road terbaik",
    image: "/placeholder.svg?height=300&width=400&text=Pajero+Sport",
    capacity: 7,
    fuel: "Diesel",
    transmission: "Manual/Matic",
    year: "2022-2023",
    features: [
      "4WD",
      "AC",
      "Audio System",
      "Airbag",
      "ABS",
      "Hill Start Assist",
    ],
    pricePerDay: 750000,
    rating: 4.9,
  },
  {
    name: "Toyota Hiace",
    category: "Minibus",
    description:
      "Kapasitas besar untuk grup, keluarga besar, atau perjalanan wisata",
    image: "/placeholder.svg?height=300&width=400&text=Toyota+Hiace",
    capacity: 15,
    fuel: "Diesel",
    transmission: "Manual",
    year: "2021-2022",
    features: ["AC", "Audio System", "Power Steering", "Bagasi Luas"],
    pricePerDay: 800000,
    rating: 4.7,
  },
  {
    name: "Honda Brio",
    category: "City Car",
    description:
      "Mobil kompak ideal untuk perjalanan dalam kota dengan konsumsi BBM irit",
    image: "/placeholder.svg?height=300&width=400&text=Honda+Brio",
    capacity: 5,
    fuel: "Bensin",
    transmission: "Manual/Matic",
    year: "2022-2023",
    features: ["AC", "Audio System", "Power Steering", "Central Lock"],
    pricePerDay: 250000,
    rating: 4.5,
  },
];

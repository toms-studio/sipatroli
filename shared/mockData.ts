export interface Vehicle {
  id: string;
  plate: string;
  brand: string;
  type: string;
  year: number;
  color: string;
  frameNumber: string;
  status: "BERSIH" | "CURIAN" | "SIM_DICABUT" | "CRITICAL" | "HIGH" | "MEDIUM";
  owner: {
    name: string;
    nik: string;
    dateOfBirth: string;
    simNumber: string;
    simStatus: "AKTIF" | "SUSPENDED" | "EXPIRED";
    phone: string;
  };
  violations: Array<{
    date: string;
    description: string;
    fine: number;
  }>;
  reports: Array<{
    id: string;
    type: "LAPORAN_PENCURIAN" | "DAFTAR_PENCARIAN_ORANG";
    timestamp: string;
    details: {
      reportNumber?: string;
      location?: string;
      status?: string;
      reporter?: string;
      case?: string;
      publisher?: string;
      priority?: string;
      action?: string;
    };
  }>;
  lastScanned?: string;
  accuracy?: number;
  speed?: number;
  location?: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

export interface PatrolUnit {
  id: string;
  unitId: string;
  plate: string;
  status: "AKTIF" | "INACTIVE";
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  officer: {
    name: string;
    badge: string;
    rank: string;
    shiftStart: string;
    shiftDuration: number;
  };
  lastUpdate: string;
}

export interface Report {
  id: string;
  plate: string;
  type: "PENCURIAN" | "DPO" | "VIOLATION";
  reportNumber: string;
  status: "AKTIF" | "RESOLVED" | "PENDING";
  priority: "KRITIS" | "TINGGI" | "SEDANG" | "RENDAH";
  location: string;
  publisher: string;
  reporter: string;
  timestamp: string;
  description: string;
}

export const mockVehicles: Record<string, Vehicle> = {
  "B 1234 ABC": {
    id: "1",
    plate: "B 1234 ABC",
    brand: "Toyota",
    type: "Avanza 1.3 G",
    year: 2019,
    color: "Hitam Metalik",
    frameNumber: "MHFM1BA3JKK123456",
    status: "CURIAN",
    owner: {
      name: "Ahmad Sudirman",
      nik: "3171234567890123",
      dateOfBirth: "15/08/1985",
      simNumber: "851234567890",
      simStatus: "AKTIF",
      phone: "0812-3456-7890",
    },
    violations: [
      { date: "2025-01-15", description: "Parkir Liar", fine: 250000 },
      { date: "2025-01-10", description: "Melanggar Rambu", fine: 500000 },
    ],
    reports: [
      {
        id: "r1",
        type: "LAPORAN_PENCURIAN",
        timestamp: "20/01/2025 14:30:00",
        details: {
          reportNumber: "LP/B/123/I/2025/Restro",
          location: "Mall Grand Indonesia",
          status: "AKTIF - DPO",
          reporter: "Ahmad Sudirman",
        },
      },
    ],
    lastScanned: "2025-01-20 15:45:30",
    accuracy: 98,
    speed: 65,
    location: {
      latitude: -6.2088,
      longitude: 106.8456,
      address: "Jl. Sudirman, Jakarta Pusat",
    },
  },
  "B 5678 DEF": {
    id: "2",
    plate: "B 5678 DEF",
    brand: "Honda",
    type: "Civic Type R",
    year: 2022,
    color: "Merah",
    frameNumber: "MHFM2BA3JKK123457",
    status: "BERSIH",
    owner: {
      name: "Budi Pratama",
      nik: "3171234567890124",
      dateOfBirth: "20/05/1990",
      simNumber: "851234567891",
      simStatus: "AKTIF",
      phone: "0813-1234-5678",
    },
    violations: [],
    reports: [],
    lastScanned: "2025-01-20 15:40:00",
    accuracy: 95,
    speed: 45,
    location: {
      latitude: -6.2100,
      longitude: 106.8500,
      address: "Jl. Gatot Subroto, Jakarta",
    },
  },
  "B 9012 GHI": {
    id: "3",
    plate: "B 9012 GHI",
    brand: "Mitsubishi",
    type: "Xpander",
    year: 2021,
    color: "Putih",
    frameNumber: "MHFM3BA3JKK123458",
    status: "HIGH",
    owner: {
      name: "Siti Nurhaliza",
      nik: "3171234567890125",
      dateOfBirth: "10/03/1988",
      simNumber: "851234567892",
      simStatus: "AKTIF",
      phone: "0814-5678-9012",
    },
    violations: [
      { date: "2025-01-18", description: "Kecepatan Berlebih", fine: 500000 },
    ],
    reports: [],
    lastScanned: "2025-01-20 15:35:00",
    accuracy: 92,
    speed: 78,
    location: {
      latitude: -6.2120,
      longitude: 106.8520,
      address: "Jl. MH Thamrin, Jakarta",
    },
  },
  "B 3456 JKL": {
    id: "4",
    plate: "B 3456 JKL",
    brand: "Toyota",
    type: "Fortuner",
    year: 2020,
    color: "Hitam",
    frameNumber: "MHFM4BA3JKK123459",
    status: "MEDIUM",
    owner: {
      name: "Rudi Hartono",
      nik: "3171234567890126",
      dateOfBirth: "25/11/1992",
      simNumber: "851234567893",
      simStatus: "AKTIF",
      phone: "0815-9012-3456",
    },
    violations: [],
    reports: [],
    lastScanned: "2025-01-20 15:30:00",
    accuracy: 90,
    speed: 55,
    location: {
      latitude: -6.2150,
      longitude: 106.8480,
      address: "Jl. Bintaro, Jakarta Selatan",
    },
  },
  "B 7890 MNO": {
    id: "5",
    plate: "B 7890 MNO",
    brand: "Daihatsu",
    type: "Terios",
    year: 2023,
    color: "Biru",
    frameNumber: "MHFM5BA3JKK123460",
    status: "CRITICAL",
    owner: {
      name: "Eka Prasetya",
      nik: "3171234567890127",
      dateOfBirth: "08/07/1995",
      simNumber: "851234567894",
      simStatus: "EXPIRED",
      phone: "0816-3456-7890",
    },
    violations: [
      { date: "2025-01-19", description: "Mengemudi Ugal-Ugalan", fine: 1000000 },
    ],
    reports: [
      {
        id: "r2",
        type: "DAFTAR_PENCARIAN_ORANG",
        timestamp: "19/01/2025 09:15:00",
        details: {
          case: "Penipuan Online",
          publisher: "Polres Jakarta Selatan",
          priority: "TINGGI",
          action: "Amankan & Tahan",
        },
      },
    ],
    lastScanned: "2025-01-20 15:25:00",
    accuracy: 88,
    speed: 92,
    location: {
      latitude: -6.2170,
      longitude: 106.8410,
      address: "Jl. Slipi, Jakarta Pusat",
    },
  },
};

export const mockPatrolUnits: PatrolUnit[] = [
  {
    id: "u1",
    unitId: "UNIT-001",
    plate: "B 1111 AAA",
    status: "AKTIF",
    location: {
      latitude: -6.2088,
      longitude: 106.8456,
      address: "Jl. Sudirman, Jakarta Pusat",
    },
    officer: {
      name: "Briptu Agus Wijaya",
      badge: "12345",
      rank: "Briptu",
      shiftStart: "07:00",
      shiftDuration: 8,
    },
    lastUpdate: "2025-01-20 15:45:00",
  },
  {
    id: "u2",
    unitId: "UNIT-002",
    plate: "B 2222 BBB",
    status: "AKTIF",
    location: {
      latitude: -6.2100,
      longitude: 106.8500,
      address: "Jl. Gatot Subroto, Jakarta",
    },
    officer: {
      name: "Bripka Hendra Kusuma",
      badge: "12346",
      rank: "Bripka",
      shiftStart: "08:00",
      shiftDuration: 8,
    },
    lastUpdate: "2025-01-20 15:44:00",
  },
  {
    id: "u3",
    unitId: "UNIT-003",
    plate: "B 3333 CCC",
    status: "AKTIF",
    location: {
      latitude: -6.2120,
      longitude: 106.8520,
      address: "Jl. MH Thamrin, Jakarta",
    },
    officer: {
      name: "Bripka Susi Handoko",
      badge: "12347",
      rank: "Bripka",
      shiftStart: "06:00",
      shiftDuration: 9,
    },
    lastUpdate: "2025-01-20 15:43:00",
  },
  {
    id: "u4",
    unitId: "UNIT-004",
    plate: "B 4444 DDD",
    status: "AKTIF",
    location: {
      latitude: -6.2150,
      longitude: 106.8480,
      address: "Jl. Bintaro, Jakarta Selatan",
    },
    officer: {
      name: "Bripka Dwi Santoso",
      badge: "12348",
      rank: "Bripka",
      shiftStart: "14:00",
      shiftDuration: 8,
    },
    lastUpdate: "2025-01-20 15:42:00",
  },
];

export const mockReports: Report[] = [
  {
    id: "rep1",
    plate: "B 1234 ABC",
    type: "PENCURIAN",
    reportNumber: "LP/B/123/I/2025/Restro",
    status: "AKTIF",
    priority: "KRITIS",
    location: "Mall Grand Indonesia",
    publisher: "Polres Jakarta Pusat",
    reporter: "Ahmad Sudirman",
    timestamp: "20/01/2025 14:30:00",
    description: "Laporan pencurian kendaraan di area mall",
  },
  {
    id: "rep2",
    plate: "B 7890 MNO",
    type: "DPO",
    reportNumber: "DPO/2025/001",
    status: "AKTIF",
    priority: "TINGGI",
    location: "Polres Jakarta Selatan",
    publisher: "Polres Jakarta Selatan",
    reporter: "Sistem",
    timestamp: "19/01/2025 09:15:00",
    description: "Daftar Pencarian Orang terkait kasus penipuan online",
  },
  {
    id: "rep3",
    plate: "B 5678 DEF",
    type: "VIOLATION",
    reportNumber: "VIO/2025/001",
    status: "PENDING",
    priority: "SEDANG",
    location: "Jl. Gatot Subroto",
    publisher: "Traffic Unit",
    reporter: "Sistem",
    timestamp: "18/01/2025 11:20:00",
    description: "Pelanggaran lalu lintas - melanggar rambu",
  },
  {
    id: "rep4",
    plate: "B 9012 GHI",
    type: "VIOLATION",
    reportNumber: "VIO/2025/002",
    status: "RESOLVED",
    priority: "RENDAH",
    location: "Jl. MH Thamrin",
    publisher: "Traffic Unit",
    reporter: "Sistem",
    timestamp: "17/01/2025 16:45:00",
    description: "Pelanggaran lalu lintas - parkir di area terlarang",
  },
];

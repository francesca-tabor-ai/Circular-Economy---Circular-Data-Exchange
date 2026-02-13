
export type MaterialType = 'Plastic' | 'Battery' | 'Textile' | 'E-Waste' | 'Metal';

export interface MaterialBatch {
  id: string;
  batchNumber: string;
  materialType: MaterialType;
  origin: string;
  weightKg: number;
  status: 'Inbound' | 'Processing' | 'Verified' | 'Shipped';
  circularityScore: number;
  timestamp: string;
  verificationId?: string;
}

export interface VerificationResult {
  score: number;
  integrityInsights: string;
  complianceStatus: 'Passed' | 'Pending' | 'Flagged';
  suggestedPremium: string;
}

export interface AnalyticsData {
  totalVolume: number;
  verifiedVolume: number;
  impactCo2Saved: number;
  monetizedValue: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

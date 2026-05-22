export const mockSuppliers = [
  { id: 't1-1', name: 'Global Fiber Co.', tier: 1, status: 'on_track', progress: 50, phase: 2, materialType: 'Fiber' },
  { id: 't1-2', name: 'EcoCotton Suppliers', tier: 1, status: 'warning', progress: 25, phase: 1, materialType: 'Fiber' },
  { id: 't2-1', name: 'Premium Yarns Ltd.', tier: 2, status: 'on_track', progress: 100, phase: 3, materialType: 'Yarn' },
  { id: 't2-2', name: 'FastSpin Threads', tier: 2, status: 'critical', progress: 50, phase: 2, materialType: 'Yarn' },
  { id: 't3-1', name: 'Precision Cuts', tier: 3, status: 'on_track', progress: 75, phase: 3, materialType: 'Cutting Parts' },
];

export const summaryMetrics = {
  activeSuppliers: 142,
  onTrack: 118,
  warnings: 18,
  critical: 6,
  materialsInTransit: 24
};

export const alerts = [
  { id: 1, type: 'critical', message: 'Delay at Tier 2 - FastSpin Threads', time: '10 mins ago' },
  { id: 2, type: 'warning', message: 'Quality check pending T1 - EcoCotton', time: '1 hr ago' },
  { id: 3, type: 'info', message: 'Shipment scheduled for T3 Precision Cuts', time: '2 hrs ago' },
];

export class BasicUse {
  constructor() {
    this.tooltip = {showLabelTooltip: true, showCustomLabelTooltip: true};
    this.scales = [{minimum: 0, maximum: 1.5, minorIntervalValue: 0, majorIntervalValue: 0.25, showCustomLabels: true, width: 4, border: {color: 'transparent', width: 0}, showBarPointers: false, showRanges: true, length: 310, position: {x: 52, y: 50}, markerPointers: [{value: 1.2, length: 10, width: 10, backgroundColor: '#4D4D4D', border: {color: '#4D4D4D'}}], labels: [{font: {size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold'}, unitText: '$ ', unitTextPlacement: ej.datavisualization.LinearGauge.UnitTextPlacement.Front, distanceFromScale: {x: -20}}], ticks: [{type: 'majorinterval', width: 1, color: '#8c8c8c'}], ranges: [{endValue: 0.75, startValue: 0, backgroundColor: 'Green', border: {color: 'Green'}, startWidth: 4, endWidth: 4}, {endValue: 1, startValue: 0.75, backgroundColor: 'yellow', border: {color: 'yellow'}, startWidth: 4, endWidth: 4}, {endValue: 1.5, startValue: 1, backgroundColor: 'Red', border: {color: 'Red'}, startWidth: 4, endWidth: 4}], customLabels: [{value: 'Fuel Cost $ / L', position: {x: 51, y: 100}, color: '#fc0606', font: {size: '12px', fontFamily: 'Arial', fontStyle: 'bold'}}]}];
  }
  onLoad() {
    this.update.loadGaugeTheme();
  }
}

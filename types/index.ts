export type TimerItems = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

export interface TimerProps {
  targetDate: Date;
  onComplete?: () => void;
  render?: (timeLeft: TimerItems | null) => React.ReactNode;
}

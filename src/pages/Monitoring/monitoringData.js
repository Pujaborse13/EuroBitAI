export const summaryCards = [
  {
    title: "Total Services",
    value: 24,
    color: "#2563eb",
    icon: "🖥️",
  },
  {
    title: "Healthy",
    value: 21,
    color: "#22c55e",
    icon: "✅",
  },
  {
    title: "Warning",
    value: 2,
    color: "#f59e0b",
    icon: "⚠️",
  },
  {
    title: "Critical",
    value: 1,
    color: "#ef4444",
    icon: "🚨",
  },
];

export const infrastructure = [
  {
    name: "CPU Usage",
    value: 58,
    color: "#2563eb",
  },
  {
    name: "Memory",
    value: 72,
    color: "#22c55e",
  },
  {
    name: "Disk Usage",
    value: 81,
    color: "#f97316",
  },
  {
    name: "Network",
    value: 42,
    color: "#8b5cf6",
  },
];

export const services = [
  {
    name: "CyberArk",
    status: "Healthy",
    response: "120 ms",
  },
  {
    name: "LDAP",
    status: "Healthy",
    response: "95 ms",
  },
  {
    name: "Kafka",
    status: "Healthy",
    response: "80 ms",
  },
  {
    name: "Scheduler",
    status: "Warning",
    response: "350 ms",
  },
  {
    name: "AI Engine",
    status: "Healthy",
    response: "102 ms",
  },
  {
    name: "Splunk",
    status: "Critical",
    response: "Timeout",
  },
];

export const alerts = [
  {
    title: "Disk Usage exceeded 90%",
    severity: "Critical",
    time: "2 min ago",
  },
  {
    title: "Scheduler Job Failed",
    severity: "Warning",
    time: "8 min ago",
  },
  {
    title: "CPU Spike detected",
    severity: "Warning",
    time: "15 min ago",
  },
  {
    title: "Login Failure threshold crossed",
    severity: "Info",
    time: "22 min ago",
  },
  
];

export const schedulers = [
  {
    job: "CyberArk Sync",
    status: "Completed",
    duration: "2m 15s",
    next: "10:30 AM",
  },
  {
    job: "LDAP Sync",
    status: "Running",
    duration: "58 sec",
    next: "Running",
  },
  {
    job: "Splunk Health",
    status: "Failed",
    duration: "4m",
    next: "11:00 AM",
  },
  {
    job: "AI Analytics",
    status: "Completed",
    duration: "1m",
    next: "11:30 AM",
  },
];

export const slowApis = [
  {
    api: "/connector/sync",
    latency: "780 ms",
  },
  {
    api: "/user/search",
    latency: "540 ms",
  },
  {
    api: "/entitlement",
    latency: "490 ms",
  },
  {
    api: "/audit/export",
    latency: "410 ms",
  },

];
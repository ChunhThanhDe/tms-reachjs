export const navigations = [
  { name: 'Terminal Studio', path: '/tms-default/studio', icon: 'dashboard' },
  {
    name: 'Devices Manager',
    icon: 'router',
    children: [
      { name: 'Devices', path: '/tms-devices/devices-management' },
      { name: 'List Devices', path: '/tms-devices/list-devices' },
    ],
  },
  {
    name: 'Application Manager',
    icon: 'apps',
    children: [
      { name: 'Applications', path: '/tms-application/application-management' },
      { name: 'APK', path: '/tms-application/apk-management' },
    ],
  },
  {
    name: 'Policy Manager',
    icon: 'receiptLongIcon',
    children: [
      { name: 'Policy', path: '/tms-policy/policy-management' },
      { name: 'Command', path: '/tms-policy/command-management' },
      { name: 'Notification', path: '/tms-policy/notificationID-management' },
    ],
  },
  {
    name: 'User Manager',
    icon: 'security',
    path: '/tms-admin/user-management',
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'F' }],
  },
];
// .filter((item) => !(role.length === 1 && item.name === 'User Manager'));

// Do something with the filtered `navigations` array here

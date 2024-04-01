export const adminMenu = [
  //Quản lý người dùng
  {
    name: "menu.admin.user",
    menus: [
      // {
      //   name: "menu.admin.manage-admin",
      //   link: "/system/user-admin",
      // },
      {
        name: "menu.admin.manage-doctor",
        link: "/system/manage-doctor",
      },
      {
        name: "menu.admin.crud-redux",
        link: "/system/user-redux",
      },
      {
        name: "menu.doctor.schedule",
        link: "/doctor/manage-schedule",
      },
      // name: "menu.admin.manage-user",
      // subMenus: [
      //   {
      //     name: "menu.system.system-administrator.user-manage",
      //     link: "/system/user-manage",
      //   },
      //   {
      //     name: "menu.system.system-administrator.user-redux",
      //     link: "/system/user-redux",
      //   },
      // ],
      // },
    ],
  },
  //Quản lý phòng khám
  {
    name: "menu.admin.clinic",
    menus: [
      // {
      {
        name: "menu.admin.manage-clinic",
        link: "/system/manage-clinic",
      },
    ],
  },
  //Quản lý chuyên khoa
  {
    name: "menu.admin.speciality",
    menus: [
      // {
      {
        name: "menu.admin.manage-speciality",
        link: "/system/manage-speciality",
      },
    ],
  },
];

export const doctorMenu = [
  //Quản lý người dùng
  {
    name: "menu.admin.user",
    menus: [
      {
        //Quản lý lịch khám bệnh của bác sĩ
        name: "menu.doctor.schedule",
        link: "/doctor/manage-schedule",
      },
      {
        //Quản lý bệnh nhân khám bệnh của bác sĩ
        name: "menu.doctor.manage-patient",
        link: "/doctor/manage-patient",
      },
    ],
  },
];

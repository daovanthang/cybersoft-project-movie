"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          name: "Cuộc chiến Phong Lôi",
          startDate: "2021-06-10 21:30:35",
          time: 1,
          evaluate: 4,
          poster: "/images/cuoc-chien-phong-loi.png",
          trailer: "/videos/cuoc-chien-phong-loi-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "Anh Hùng Xạ Điêu",
          startDate: "2021-03-10 10:30:35",
          time: 2,
          evaluate: 5,
          poster: "/images/anh-hung-xa-dieu.png",
          trailer: "/videos/anh-hung-xa-dieu-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "Onepiece",
          startDate: "2021-01-10 21:30:35",
          time: 4,
          evaluate: 5,
          poster: "/images/Onepiece.png",
          trailer: "/videos/Onepiece-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "Cuộc sống của pi",
          startDate: "2020-01-10 21:30:35",
          time: 4,
          evaluate: 5,
          poster: "/images/cuoc-song-cua-pi.png",
          trailer: "/videos/cuoc-song-cua-pi-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "Tôi không cô đơn",
          startDate: "2021-08-10 21:30:35",
          time: 1,
          evaluate: 1,
          poster: "/images/toi-khong-co-don.png",
          trailer: "/videos/toi-khong-co-don-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "Đấu phá thương khung",
          startDate: "2019-01-10 21:30:35",
          time: 1,
          evaluate: 5,
          poster: "/images/dau-pha-thuong-khung.png",
          trailer: "/videos/dau-pha-thuong-khung-trailer.mp4",
          createdAt: "2019-06-10 21:30:35",
          updatedAt: "2019-06-10 21:30:35",
        },
        {
          name: "Yêu Thần Ký",
          startDate: "2020-02-10 21:30:35",
          time: 1,
          evaluate: 5,
          poster: "/images/yeu-than-ky.png",
          trailer: "/videos/yeu-than-ky-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "Ngày cuối cùng",
          startDate: "2022-06-10 21:30:35",
          time: 1,
          evaluate: 4,
          poster: "/images/ngay-cuoi-cung.png",
          trailer: "/videos/ngay-cuoi-cung-trailer.mp4",
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          name: "Cuộc chiến Luân Hồi",
          startDate: "2021-06-10 21:30:35",
          time: 1,
          evaluate: 4,
          poster: "/images/cuoc-chien-luan-hoi.png",
          trailer: "/videos/cuoc-chien-luan-hoi-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "lộc đỉnh ký",
          startDate: "2021-06-10 21:30:35",
          time: 1,
          evaluate: 4,
          poster: "/images/loc-dinh-ky.png",
          trailer: "/videos/loc-dinh-ky-trailer.mp4",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

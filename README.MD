Graphql:
query getDetailUser {
  user(id: 1) {
    id
    name
    email
	avatar
    roles {
      id
      roleName
      description
    }
  }
}

query getDetailUserByEmail {
  userByEmail(email: "tuan@gmail.com") {
    id
    name
    email
    roles {
      id
      roleName
      description
    }
  }
}

query getUserList {
  users {
    name
    phone
    age
    email
	avatar
    roles {
      id
      roleName
      description
    }
  }
}

query getUserWithPage {
  userWithPage(page: 3, number: 3) {
    currentPage
    count
    totalPages
    totalCount
    items {
      id
      name
      email
      phone
      age
      roles {
        id
        roleName
        description
      }
    }
  }
}

mutation createOneUser {
  createUser(inputUser: {name: "thang bat tu", email: "thang.email@gmail.com", password: "12345678910", phone: "12345678910", age: 19, roleName: "ADMIN"}) {
    id
    name
    phone
    age
    roles {
      id
      roleName
      description
    }
  }
}

mutation updateUser {
  updateUser(id: 3, inputUser: {name: "11thang bat tu", email: "thang.email@gmail.com", password: "12345678910", phone: "12345678910", age: 19, roleName: "ADMIN"}) {
   id
  status
  }
}

mutation deleteUserOne {
  removeUser(id: 1) {
    name
  }
}

query getDetailRole {
  role(id: 1) {
    id
    roleName
  }
}

query getRoleList {
  roles {
    id
    roleName
    description
  }
}

mutation createRole {
  createRole(inputRole: {roleName: "CLIENT", description: "NGUOI DUNG"}) {
    roleName
    description
  }
}

mutation removeRole {
  removeRole(id: 15) {
    roleName
    description
  }
}

query getMovieList {
  movies {
    id
    name
    startDate
    time
    evaluate
    poster
    trailer
  }
}

query getDetailMovie {
  movie(id: 1) {
    id
    name
    startDate
    time
    evaluate
    poster
    trailer
  }
}

mutation removeMovie {
  removeMovie(id: 1) {
    id
    name
    startDate
    time
    evaluate
    poster
    trailer
  }
}

mutation createMovie {
  createMovie(inputMovie: {name: "Bệnh Dịch Covid 19", startDate: "2021-03-10T10:30:35.000Z", time: 2, evaluate: 3, poster: "/images/benh-dich-covid-19.png", trailer: "/videos/benh-dich-covid-19-trailer.mp4"}) {
    id
    name
    startDate
    time
    evaluate
    poster
    trailer
  }
}

query getMovieWithPage {
  movieWithPage(page: 1, number: 3) {
    currentPage
    count
    totalPages
    totalCount
    items {
      id
      name
      startDate
      time
      evaluate
      poster
      trailer
    }
  }
}
query getMovieWithPageByDay {
  movieWithPageByDay(page: 1, number: 4,from:"2010-06-10 21:30:35",to:"2022-06-10 21:30:35",name:"") {
    currentPage
    count
    totalPages
    totalCount
    items {
      id
      name
      startDate
      time
      evaluate
      poster
      trailer
    }
  }
}

mutation updateMovie {
  updateMovie(id: 3, inputMovie: {name: "Bệnh Dịch Covid 19", startDate: "2021-03-10T10:30:35.000Z", time: 2, evaluate: 3, poster: "/images/benh-dich-covid-19.png", trailer: "/videos/benh-dich-covid-19-trailer.mp4"}) {
   id
  status
  }
}

query getCineplexList {
  cineplexs {
    id
    codeCineplex
    name
    logo
    aliase
  }
}
query getCinemaByCodeCineplex{
  cinemas(codeCineplex:"BHDStar"){
    id
    name
    image
    address
  }
}

localhost:3000/api/auth/sign-in ( login)
{
   "email":"customer@gmail.com",
    "password":"123"
}
upload avatar:
localhost:3000/api/users/upload-avatar
authen Header: token - ...
body form-data : type file variable: avatar

upload poster cho movie
http://localhost:3000/api/movies/upload-poster
authen Header: token - ...
body form-data : type file variable: poster, type text variable: idMovie:

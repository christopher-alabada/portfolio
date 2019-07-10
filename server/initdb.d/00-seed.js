db.createUser(
  {
    user: "cpuser",
    pwd: "tNNMhnGyIi9RJbN",
    roles: [ { role: "readWrite", db: "ChrisPortfolio" } ]
  }
);

db.people.insertMany([
  {
    _id: 1,
    name: 'Tensor',
    age: 6
  },
  {
    _id: 2,
    name: 'Flow',
    age: 10
  }
]);
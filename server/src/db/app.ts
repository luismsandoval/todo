const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
});

const DynamoDB = new AWS.DynamoDB();

const createTable = () => {
  const params = {
    TableName: "Tasks",
    KeySchema: [{ AttributeName: "userid", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "userid", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };

  DynamoDB.createTable(params, (err, data) => {
    if (err) {
      console.error("unable to create table", err);
    } else {
      console.log("created table", data);
    }
  });
};

const addTask = (name, description, difficulty, completed, userid) => {
  const params = {
    TableName: "Tasks",
    Item: {
      userid: { S: userid },
      name: { S: name },
      description: { S: description },
      difficulty: { N: difficulty },
      completed: { BOOL: completed },
    },
  };

  DynamoDB.putItem(params, (err) => {
    if (err) {
      console.error("Unable to add movie", err);
    } else {
      console.log(`Added ${description} assigned to ${name}`);
    }
  });
};

const getAllTasks = () => {
  const params = {
    TableName: "Tasks",
  };

  DynamoDB.scan(params, (err, data) => {
    if (err) {
      console.log("unable to find tasks", err);
    } else {
      console.error(`found ${data.Count} tasks`);
      console.log(data.Items);
    }
  });
};

const deleteTask = (userid) => {
  const params = {
    TableName: "Tasks",
    Key: {
      userid: { S: userid },
    },
  };

  DynamoDB.deleteItem(params, (err) => {
    if (err) {
      console.error("unable to find task");
    } else {
      console.log(`deleted task ${userid}`);
    }
  });
};

const dbHandler = {
  getAllTasks,
  addTask,
  deleteTask,
};

module.exports = {
  createTable,
  DynamoDB,
  dbHandler,
};

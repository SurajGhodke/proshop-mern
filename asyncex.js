//fetch api

fetch("api")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data); //response.json() => data
  })
  .catch((err) => {
    console.log("rejected", err);
  });

//async & await

const getTodo = async () => {
  const response = await fetch("api");
  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }

  const data = await response.json();

  return data;
};

getTodo()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => console.log("reject", err.message));

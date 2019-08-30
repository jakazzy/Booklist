const axiosMock = jest.genMockFromModule("axios");

let mockResponse = {
  data: {
    books: [
      { title: "A warrior", author: "Mamle Agushi", id: 0 },
      { title: "Life overturn", author: "Afi", id: 1 }
    ]
  }
};

const req = () => {
  return new Promise(resolve => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 1000);
  });
};
axiosMock.get.mockImplementation(req);

module.exports = axiosMock;

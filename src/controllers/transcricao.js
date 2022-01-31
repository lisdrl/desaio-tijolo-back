const transcrever = async (req, res) => {
  const { code } = req.body

  let word = ''

  switch (code[0]) {
    case '2':
      if (code.length % 3 === 1) {
        word = 'A'
      } else if (code.length % 3 === 2) {
        word = 'B'
      } else if (code.length % 3 === 0) {
        word = 'C'
      }
      return res.json(word).status(201);
    case '3':
      if (code.length % 3 === 1) {
        word = 'D'
      } else if (code.length % 3 === 2) {
        word = 'E'
      } else if (code.length % 3 === 0) {
        word = 'F'
      }
      return res.json(word).status(201);

    case '4':
      if (code.length % 3 === 1) {
        word = 'G'
      } else if (code.length % 3 === 2) {
        word = 'H'
      } else if (code.length % 3 === 0) {
        word = 'I'
      }
      return res.json(word).status(201);

    case '5':
      if (code.length % 3 === 1) {
        word = 'J'
      } else if (code.length % 3 === 2) {
        word = 'K'
      } else if (code.length % 3 === 0) {
        word = 'L'
      }
      return res.json(word).status(201);

    case '6':
      if (code.length % 3 === 1) {
        word = 'M'
      } else if (code.length % 3 === 2) {
        word = 'N'
      } else if (code.length % 3 === 0) {
        word = 'O'
      }
      return res.json(word).status(201);

    case '7':
      if (code.length % 4 === 1) {
        word = 'P'
      } else if (code.length % 4 === 2) {
        word = 'Q'
      } else if (code.length % 4 === 3) {
        word = 'R'
      } else if (code.length % 4 === 0) {
        word = 'S'
      }
      return res.json(word).status(201);

    case '8':
      if (code.length % 3 === 1) {
        word = 'T'
      } else if (code.length % 3 === 2) {
        word = 'U'
      } else if (code.length % 3 === 0) {
        word = 'V'
      }
      return res.json(word).status(201);

    case '9':
      if (code.length % 4 === 1) {
        word = '  W'
      } else if (code.length % 4 === 2) {
        word = 'X'
      } else if (code.length % 4 === 3) {
        word = 'Y'
      } else if (code.length % 4 === 0) {
        word = 'Z'
      }
      return res.json(word).status(201);
  }
};

module.exports = {
  transcrever
}

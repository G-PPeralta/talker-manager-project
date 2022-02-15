const { readFile, writeFile } = require('../utils/handleFile');

const deleteTalker = async (req, res) => {
  const { id } = req.body;
  const talkers = await readFile('./talker.json');
  const findTalkerIndex = talkers.findIndex((talker) => talker.id === Number(id));
  talkers.splice(talkers[findTalkerIndex]);
  await writeFile(talkers);
  return res.status(204).send();
};

module.exports = { deleteTalker };
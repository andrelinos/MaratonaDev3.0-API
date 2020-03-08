class DonorsControler {
  async index(req, res) {
    return res.json({ ok: 'Tudo Certo.' });
  }
}

export default new DonorsControler();

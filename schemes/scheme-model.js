db = require('../data/db');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  return db('schemes')
    .where({ 'scheme_id': id })
    .join('steps as st', 'schemes.id', 'st.scheme_id')
    .select('st.id', 'schemes.scheme_name', 'st.step_number', 'st.instructions')
    .orderBy('st.step_number');
}

function add(scheme) {
  return db('schemes').insert(scheme);
}

function update(changes, id) {}

function remove(id) {}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
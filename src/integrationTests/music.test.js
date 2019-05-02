/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
import request from 'supertest';
import httpStatus from 'http-status';
import { expect } from 'chai';
import Chance from 'chance';

import server from '../index';
import Music from '../models/musicModel';

const chance = Chance();

describe('Music API', async () => {
  let musicList;

  beforeEach(async () => {
    musicList = new Array(chance.integer({ min: 20, max: 100 }))
      .fill(0).map(() => ({
        title: chance.sentence(),
        artist: chance.name(),
        album: chance.sentence(),
        year: chance.year({ min: 1700, max: 2019 }),
        path: chance.url({ extensions: ['wav', 'mp3'] }),
      }));
    await Music.deleteMany({});
    await Music.insertMany(musicList);
  });

  describe('GET /music', () => {
    it('should get a list of music with default page size', () => {
      return request(server)
        .get('/music')
        .expect(httpStatus.OK)
        .then(async (res) => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(10);
        });
    });

    it('should get correct number of music with different page size', () => {
      return request(server)
        .get('/music')
        .query({ page: 2, size: 3 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(3);
        });
    });
  });

  describe('GET /music/:id', () => {
    it('should get music', async () => {
      const target = await Music.findOne({});
      return request(server)
        .get(`/music/${target._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.include({ title: target.title, path: target.path });
        });
    });

    it('should report error when the item does not exist', () => {
      return request(server)
        .get('/music/youarenotgonnafindme')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          console.log(res);
          expect(res.body.message).to.be.equal('MMM does not exist');
        });
    });
  });

  describe('POST /music', () => {
    it('happy path', () => {
      return request(server)
        .post('/music')
        .send({})
        .expect(httpStatus.OK);
    });
  });

  describe('PUT /music/:id', () => {
    it('happy path', async () => {
      const id = (await Music.findOne({}))._id;

      return request(server)
        .put(`/music/${id}`)
        .send({})
        .expect(httpStatus.OK);
    });
  });

  describe('DELETE /music', () => {
    it('happy path', async () => {
      const id = (await Music.findOne({}))._id;

      return request(server)
        .delete(`/music/${id}`)
        .expect(httpStatus.OK);
    });
  });

});

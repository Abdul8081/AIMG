const mongoose = require('mongoose');

let gfs = null;
let gridFSBucket = null;

const initGridFS = () => {
    const conn = mongoose.connection;

    if (conn.readyState === 1) {
        gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
            bucketName: 'images'
        });
        gfs = gridFSBucket;
        console.log('GridFS initialized');
    } else {
        conn.once('open', () => {
            gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
                bucketName: 'images'
            });
            gfs = gridFSBucket;
            console.log('GridFS initialized');
        });
    }
};

const getGridFS = () => {
    if (!gridFSBucket) {
        const conn = mongoose.connection;
        if (conn.readyState === 1) {
            gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
                bucketName: 'images'
            });
            gfs = gridFSBucket;
        }
    }
    return gridFSBucket;
};

module.exports = { initGridFS, getGridFS };

/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-node.d.ts" />

namespace PouchDBBrowserTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };
        let model: PouchDB.Core.Document<MyModel>;

        let db = new PouchDB<MyModel>('myDb', {
            adapter: 'http',
        });
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'leveldb',
        });
        db.get('model').then((result) => model);
        db.viewCleanup().catch((error) => {
        });
    }
}

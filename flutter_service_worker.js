'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "e8cc3e65e1671388e38bb5d306ca7f0e",
"/": "e8cc3e65e1671388e38bb5d306ca7f0e",
"main.dart.js": "6d8becfff90c7c8373b411e5fdd5171f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "7d2ee3e61e3822b79bab6848371e8da9",
"favicon.jpg": "53319c1a88120b21da09307533f078a9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
".git/config": "9ff499e408d86add86e67945407ae460",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/56/4709f405596cbf7d08af08cdadab31af2a2f99": "8eb2057cc842a0d4413f75bc70fc73d7",
".git/objects/0b/e78bd0d8991a02df66719e5f12abcab4e27d28": "692366a4ec362da112616fa5695f8aca",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/02/24ebf39783769f2833f096d1f4f186fc8e1522": "b13273d175e27286f7d799b9cc6fed1c",
".git/objects/a4/75d948dfc4e4ca421171366dafde9027489a7e": "fa4dafc93f4923430057f27d9dda6ee3",
".git/objects/ac/ee057067bf663343bfac0cfca9fbe4329e9b96": "6f3dba37cd2d99025dd1d8f7652ea3b0",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/653c1f135d417981ad4790206959ed4572073c": "570192d2e7ce32381923fd85a2d58cdb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/1edd1309342ab5b3f94fd6a1a39e0fd82f5349": "bb62aea3593372be80b220d11124a100",
".git/objects/a5/b44930928b2a18df815f37145984158b94be6a": "0cd204326dc7ea3cfa87916483a3ed28",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/aa985223c99098ec6352784f7d859640814ead": "484c5b58ff01cb1e398596ff7d533dad",
".git/objects/f2/05520d188326c6f412b331a140aa878a37b44f": "13dd4738d4caad5f5b937ba2d587b6bb",
".git/objects/cf/28581cdd540feddb4f1a2317f91413fb38dc48": "216b281435c8438d6be2df2806451021",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/45/20eef8cb3a0c06f74ccc6af7b14c263742abdc": "6326cc4e1ab5b1dee1855bfafafc65e6",
".git/objects/74/3c9c9d97f0807989a81f2646b8ef74e7f9b590": "b2f0abfd21e7c60b201c66a183d19b8e",
".git/objects/17/fb55c996ed30cb473c410d8c8a08b89d5057ea": "4510195f3c54ac25eba4c33e874927c9",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3572264efa1605fce5cc7773917cebf140bb6b": "e5a8794fac3b12150b5fa6bf21234c7c",
".git/objects/00/266cf638d96deadad4797693261bea9ae9e54b": "3f22d56ba882d83dea7baa5342c34a1e",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5d/19eb5c159abb149b8d5e7ab1176b2d7314af92": "7121fa357cd82c0917b6d2a5c1f2b66f",
".git/objects/62/fc399a0e148b74b5235e2836e29e35a82497be": "dfffb919311d2d01736512d86b2c9010",
".git/objects/54/940ee249d1c874dbbcdbf803ec4de13496eb35": "7e85441e68966ee10fe9a5f2cff05884",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/01/2373f8826770e672b2d2d06e062bd0b54063ce": "f8d865f08e9615189adb2a9da0f178ee",
".git/objects/6c/784d6beeaddca5829c6b5edda156092d418907": "8a130d877898bbe6651df2cdb157ea95",
".git/objects/55/cf32623ddbfc3eea289547b642f60323e49cf5": "0ef36086dd38f0aeb9bae66a8cbb7af4",
".git/objects/64/fac25a86809ab2c9ce4e354a6357f61189598f": "9afb8d3b61de3a20e8415f82a1719c89",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/dc/60efd658a1e71d267da21c59d7d5109c0db040": "a3fa52c34f953c472a8cc6a831f6de56",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/d16110175203551b4c8dca9c480a6279341f19": "d9c40d244975aa88d8d82a919321a988",
".git/objects/ef/c93f83564848e9ab9489dd08e255775b0a69da": "40e61c178b1757d42d2f5356d202b8bc",
".git/objects/c3/417463d3521b33ddcfbce17d6ad789254d9c5e": "2089157a3d3a70cae179f8d0208558b1",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/041f882e8e5440b1259f1dc171a8fb6df63f91": "2f2015b997a22bb4c19b33b70da41c05",
".git/objects/c5/69c2259052e97e1a6fa0623b1d6562b5db1f20": "23152d512da008dfb7821652be7c2d54",
".git/objects/c5/61e2a2e5bd623f8c4353dc230ac94a025fecb3": "b0bcc44420fd9046b73d8bfe0135a80f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/a329d170056b61c863d64675fe5dc07e7195bf": "7a3afac38ebc3a79d7fbd313948d55cd",
".git/objects/23/cfbb296490c300631e1a61d3615e5e4cc19dd2": "fbaa3863afee29bb3c6acd8ffc148c93",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/71/7dc739df6a5231d356d0eaa8fa4e409f57557b": "0ace3290dbc2584ef2a2ee3c1bab3dc5",
".git/objects/1c/1eb8c42b4d26fc0a67b524dece2721b1d92fc0": "decc42ad816930ab01daaa93330f0120",
".git/objects/82/37eca29ba7144f19c5d6137a3df134ddb43031": "be2978480ef537fd26d20eb7c31e6e18",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8b/d817986b3b99f0b1f31795e61bf494502aae03": "ce1b48e2b3920f8f1faea69fee348b10",
".git/objects/7f/d19b4fa5bb31ee64b304de769db8815198f42c": "3155158e02b6d70a89de843ce5c85d86",
".git/objects/8e/4dcc203f3fa875315fc69b2775fd3f3de12b4c": "7cea73659494bbc080d9dbd4610476e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e134667f20a0020348559904b0f8924",
".git/logs/refs/heads/main": "f2453abccce50095712f67efea291acf",
".git/logs/refs/remotes/origin/main": "5a784ffa00a34d1f8268a2f67062a1fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3556c560b889ff756c0a40ba564963dd",
".git/refs/remotes/origin/main": "3556c560b889ff756c0a40ba564963dd",
".git/index": "5214e49cc1335e705366c0712b31db37",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "6e187f5586f9b868292f8e3e70c9ce95",
"assets/NOTICES": "25adc2eed178939827402b3365f7de1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "988b0cbb9818e8f322dc5672194be1b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "cf5b1d4b87600acdefa212d9a2f202cf",
"assets/fonts/MaterialIcons-Regular.otf": "314d37778de84f3b48902477467250bd",
"assets/assets/6.json": "c7520210f756f583835396620218c135",
"assets/assets/7.json": "5e0ae669da423034f1e66d83b330df5c",
"assets/assets/9.jpg": "a026bd8fd3c48db724e4a1b6e2feb7d9",
"assets/assets/11.jpg": "53319c1a88120b21da09307533f078a9",
"assets/assets/1.json": "01e112fb58e1ffa76d9ba0a93f73ee83",
"assets/assets/10.jpg": "2231127413ce5b5f000f17b246196654",
"assets/assets/2.json": "e4aaeff725e66b6b089be7497fb7cbdd",
"assets/assets/project/quiz%2520app.png": "b5f32fb22c551c761b10a6d8c3b8b5d8",
"assets/assets/project/Notepad.png": "192f6490b0ce316ea413efb826ae5a3f",
"assets/assets/project/ecommerce.png": "09336a253a5db78a0dd3bd8b61fea41e",
"assets/assets/project/EAFW.png": "1063e1fae8c7032ca13e32fd219b4675",
"assets/assets/project/MUNIR.png": "e3499564f3d97abe8fef65c0f810fc0c",
"assets/assets/project/cryptocurrency.png": "71ed243447b6cc1dd854550fd51b28d9",
"assets/assets/project/Berry%2520Gyms.png": "3df19eca2ef9b405471825aeefd6f382",
"assets/assets/project/bolot.png": "bc83770a5a27be06a9f52ba6c588d05d",
"assets/assets/project/Personal%2520website.png": "712b6c92dcfc9d30ca207bcf1544b60c",
"assets/assets/3.json": "e30e0e72635f9f78280ae15dfd5f82a8",
"assets/assets/4.json": "0d171f648eb65b0cc7e5f327d1632f0a",
"assets/assets/5.json": "4f5c04373d666717f3758fbdc5a76141",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

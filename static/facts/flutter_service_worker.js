'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "dc3e12e92a3436919bc1a01b237ac3d7",
"/": "dc3e12e92a3436919bc1a01b237ac3d7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "20b90a979b0bc2ed342972d13c30aa2e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/NOTICES": "c43aa5fc69f543741e4253ef40bbc67b",
"assets/fonts/MaterialIcons-Regular.otf": "13eea6c17460b688b5542fa7bf22d06c",
"assets/AssetManifest.json": "1d1622ba718fa74c4ca5e4cec2a41566",
"assets/shaders/shader_pixel.frag": "c75dcdfdd53b71bcbb770c173d32bb8b",
"assets/shaders/shader_region.frag": "bf5c189762db3c44a46f263e239de96e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/shaders/shader_pan.frag": "9c0107f899263e19f3ba06a08c405e67",
"assets/shaders/shader_whitebalance.frag": "0ee0569dd11a9d3addfe8583d0f6da60",
"assets/shaders/shader_image.frag": "bf5c189762db3c44a46f263e239de96e",
"assets/shaders/shader_lens.frag": "94488c3b53eacd021168f1bbd3178729",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "bc71c765d74e5d2bacfe5138fc0d4baa",
"assets/assets/paul_02.png": "bbdbafc7bdcbbd80384788d262ae64bb",
"assets/assets/bg-loop-success.wav": "d8dda02c6dec2581d34aa0a01fab8165",
"assets/assets/bg-loop.wav": "d4e96609d119e8c12c57147182cc4c25",
"assets/assets/size_02.png": "1ca8c35346fab950a2d35b2fe126ac95",
"assets/assets/size_03.png": "223b06bfba872168842f5b168e445017",
"assets/assets/size_01.png": "0fc1b58b14db62adfd48bd6c7e5ef5c6",
"assets/assets/capsicum.png": "5c89fd3654464f074341c5d4f9027346",
"assets/assets/color.jpg": "d4551c1604dc800bc7062a9b41dd4afe",
"assets/assets/pannable_pantry.png": "1c32d68c67bb980abd9ed502d748eb67",
"assets/assets/exp_1.png": "794473ade2c7bdd3dab9b5d3db91ef5c",
"assets/assets/masoori-faint.gif": "fd3e92f0d2ce3705d7937855e19235cc",
"assets/assets/lens.png": "def53e5569c638c91d9c80235a2bec28",
"assets/assets/microwave_02.png": "fe7a2d61adf2c4c92a2639a395d88e79",
"assets/assets/text_2.png": "38723a04201d646a5b00e2dd9a11aec3",
"assets/assets/dash.jpg": "3ab5f1e3c4238e4962acc5583ce6010e",
"assets/assets/wine_01.png": "b0236736e6e5a4b6e4d0a3210c350b2a",
"assets/assets/text_3.png": "98efdb5552adfb67e20d352136515e62",
"assets/assets/exp_0.png": "cef19868ea52909ea971fd662a4428dd",
"assets/assets/text_0.png": "4afa659c1d7b1eaf3727802402a7b770",
"assets/assets/exp_4.png": "967c1b1cb3de274d60d24a0e37b7cadd",
"assets/assets/dash.jpeg": "8b9666bafaf426333543be3fa1a6aa48",
"assets/assets/p1_target.png": "1892376e602021b7faf32535a75c2a88",
"assets/assets/microwave_01.png": "ed0e299bc9a6c897a2f88a29910219e2",
"assets/assets/wine_02.png": "7499fbbdb455048f457220b03d0b9ea3",
"assets/assets/wine_bottle_manipulated.png": "6d5fe56038f2740fc1b745b5a3bc743a",
"assets/assets/lens_image_02.png": "c0870b85e3ff45b8ff40149fb041d7f0",
"assets/assets/facetune_02.jpg": "0f8ece46255f96bfdbce9c4c851346cf",
"assets/assets/pannable_pantry_2.png": "fd7cd45844f355c3ad735fdb74ec9f9c",
"assets/assets/text_1.png": "70c9a2c70add6ade9681650b2db9ac87",
"assets/assets/paul_01.png": "06efa1a170e750a33de5cca6f06b7696",
"assets/assets/snapchat_02.jpg": "9bc08fa28b49e5bb3f199d6d6ceff3ca",
"assets/assets/support.png": "eb04f60a7ce2b4ce3e24707ff1c4a369",
"assets/assets/bottle.png": "18d31fd95f6ef24839dc670c54448078",
"assets/assets/lens_image_01.png": "590732d4038a3a10aac4094268c764be",
"assets/assets/image.png": "17c75b0e501e7f1d2608637137f075a5",
"assets/assets/exp_2.png": "a329ec922b7c20e103c806a0484bf5e4",
"assets/assets/bg-loop-failure.wav": "b791e199449141b90c3ec1ccb16439a7",
"assets/assets/snapchat_01.jpg": "c3ebf78acf558a8eccddb5e579fb08dd",
"assets/assets/pannable_pantry_3.png": "3b7304222f666538c118f3ec5c3b3d8d",
"assets/assets/facetune_01.jpg": "97ed54842c9cb4dd8fcea1cc46bc4433",
"assets/assets/apple.jpeg": "ba1ec8a322453d704ae82586311aa77e",
"assets/assets/image_1_desat.png": "35354e4ef1e697627d59775404f92d02",
"assets/assets/city.jpg": "c8162ac9efe1bef45c5946c1f64b2240",
"assets/assets/size_04.png": "b6c892434b52b78195b3e0ac2dc07d71",
"assets/assets/facetune_desta.jpg": "09ccd4dabd5d97cbe19c2696745296e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"manifest.json": "734e10891e50a5de4c82dc66b588edf3",
"main.dart.js": "29d03474dc509ef0de4e84052fbb7553",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05"};
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

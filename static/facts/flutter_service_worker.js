'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/AssetManifest.json": "398ef941fd3b4e3494dbfa7b0b8c3907",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/test_fruits_01.png": "1892376e602021b7faf32535a75c2a88",
"assets/assets/_p3t.png": "79af20db6e2cb246fc557943c73a8cd3",
"assets/assets/p1l3.png": "294d4dd9fdead79acef935e3597f8900",
"assets/assets/bg-loop-success.wav": "d8dda02c6dec2581d34aa0a01fab8165",
"assets/assets/text_1.png": "70c9a2c70add6ade9681650b2db9ac87",
"assets/assets/color.jpg": "d4551c1604dc800bc7062a9b41dd4afe",
"assets/assets/snapchat_01.jpg": "c3ebf78acf558a8eccddb5e579fb08dd",
"assets/assets/text_0.png": "4afa659c1d7b1eaf3727802402a7b770",
"assets/assets/bottle.png": "18d31fd95f6ef24839dc670c54448078",
"assets/assets/p2l2.png": "b55890fe9e3b559a45ad697486fb03c5",
"assets/assets/apple.jpeg": "ba1ec8a322453d704ae82586311aa77e",
"assets/assets/image_1_desat.png": "35354e4ef1e697627d59775404f92d02",
"assets/assets/lens_image_02.png": "c0870b85e3ff45b8ff40149fb041d7f0",
"assets/assets/p4l1.png": "6cd3f3a9ab966fc8b67f710eefb30781",
"assets/assets/tutorial_translate.gif": "6b692a8559e97c6092783e8af0bc9c14",
"assets/assets/honey_1_1.png": "0f6bf4011b2a7486a5d7076d71aca069",
"assets/assets/bottle_3.png": "fa83eb721fb86cbcc11176a809314cf3",
"assets/assets/_p3t2.png": "47d9bff8d3241a025fe3c34565f5b953",
"assets/assets/support.png": "4c250d5c9749dc37a4f7c86e106a9e86",
"assets/assets/pannable_pantry_2.png": "fd7cd45844f355c3ad735fdb74ec9f9c",
"assets/assets/p4t.png": "dc7e6b00f6a9df3b0c63b7b7c8486bb9",
"assets/assets/size_04.png": "b6c892434b52b78195b3e0ac2dc07d71",
"assets/assets/dash.jpg": "3ab5f1e3c4238e4962acc5583ce6010e",
"assets/assets/wine_02.png": "7499fbbdb455048f457220b03d0b9ea3",
"assets/assets/test_3.png": "dcd5030767768ed5aa3f51b9b75ca753",
"assets/assets/p1c.png": "00bd6a00aee22bbf11881ef7863f82aa",
"assets/assets/bg-loop-failure.wav": "b791e199449141b90c3ec1ccb16439a7",
"assets/assets/dp_04.png": "bb48696fafeb80992d4a3c39a53afbfa",
"assets/assets/bg-loop.wav": "d4e96609d119e8c12c57147182cc4c25",
"assets/assets/dp_03.png": "6679701f3ffa5e092bec2f1157892756",
"assets/assets/test_2.png": "b6d91d8deb6258f2881fa12c3220431d",
"assets/assets/microwave_01.png": "ed0e299bc9a6c897a2f88a29910219e2",
"assets/assets/snapchat_02.jpg": "9bc08fa28b49e5bb3f199d6d6ceff3ca",
"assets/assets/person-under-tree.png": "f1b791a7e1cffcc13236540037b28273",
"assets/assets/p5t.png": "7be997c8e477d5e637c2ec3865e3e193",
"assets/assets/honey_1_2.png": "61afbd18a69c0d923e852bfe5b824f4a",
"assets/assets/p2t.png": "04a309000f4d86c0ec29e3822a0fd664",
"assets/assets/p1l2.png": "822382b11d5cfe1dc77f9c077a704ee9",
"assets/assets/image.png": "17c75b0e501e7f1d2608637137f075a5",
"assets/assets/paul_01.png": "06efa1a170e750a33de5cca6f06b7696",
"assets/assets/pzl_kirkas_2.png": "925213d0964022b8ad6c22a2f0d1cf79",
"assets/assets/pannable_pantry_3.png": "3b7304222f666538c118f3ec5c3b3d8d",
"assets/assets/t1l1.png": "a54901daeb926811daea58395c5ec83f",
"assets/assets/pzl_kirkas.png": "760330143fe2a6ec16628b39b87d860b",
"assets/assets/p3l1.png": "47d9bff8d3241a025fe3c34565f5b953",
"assets/assets/lens_image_01.png": "590732d4038a3a10aac4094268c764be",
"assets/assets/capsicum.png": "5c89fd3654464f074341c5d4f9027346",
"assets/assets/pzl2_01.png": "4954e77e71a1697915ed3eb93540d043",
"assets/assets/pzl_caserole.png": "f45a85a38096d8a5607ac5aaaad06104",
"assets/assets/t3.png": "2396dfaf6f207ebb2702e362a2d08aee",
"assets/assets/test_fruits_06.png": "c00db68d6e900498921f2cd21c12c521",
"assets/assets/bottle_2.png": "9043f81e96f24654200849011110b4e3",
"assets/assets/pzl2_02.png": "f38eb1b8878eb2786ac685638c366c88",
"assets/assets/test_fruits_07.png": "967c1b1cb3de274d60d24a0e37b7cadd",
"assets/assets/_t1l1.png": "63f17b7b81b6f0f26b3fd67d31b9687d",
"assets/assets/test_fruits_05.png": "a329ec922b7c20e103c806a0484bf5e4",
"assets/assets/wine_bottle_manipulated.png": "6d5fe56038f2740fc1b745b5a3bc743a",
"assets/assets/p2l3.png": "424b733cfedfcca1422f7e41f22e4581",
"assets/assets/paul_02.png": "bbdbafc7bdcbbd80384788d262ae64bb",
"assets/assets/text_2.png": "38723a04201d646a5b00e2dd9a11aec3",
"assets/assets/p3t.png": "4ed0e5fbf288982080d5d615e0362783",
"assets/assets/t1l2.png": "afbec24b0c5d3ba76206d2124d3a2367",
"assets/assets/test_fruits_04.png": "794473ade2c7bdd3dab9b5d3db91ef5c",
"assets/assets/city.jpg": "c8162ac9efe1bef45c5946c1f64b2240",
"assets/assets/p1t.png": "4a6080934c160a5dda041d73881999f6",
"assets/assets/facetune_02.jpg": "0f8ece46255f96bfdbce9c4c851346cf",
"assets/assets/dp_02.png": "b5dbfe35a36fdddc1f2c7d8c30b927d7",
"assets/assets/tutorial_zoom.gif": "995b9bbe2478b616f3c5aadb3e9d839d",
"assets/assets/t2.png": "f1fce2efb2b6484aaed9f40bc91f918e",
"assets/assets/lens.png": "def53e5569c638c91d9c80235a2bec28",
"assets/assets/test_fruits_02.png": "a35c88eb432f970d2bf2d5bb119e8d48",
"assets/assets/test_fruits_03.png": "2c1b14bb4df8da05ce10fbffeb7c13a9",
"assets/assets/size_02.png": "1ca8c35346fab950a2d35b2fe126ac95",
"assets/assets/masoori-faint.gif": "fd3e92f0d2ce3705d7937855e19235cc",
"assets/assets/text_3.png": "98efdb5552adfb67e20d352136515e62",
"assets/assets/facetune_01.jpg": "97ed54842c9cb4dd8fcea1cc46bc4433",
"assets/assets/test_1.jpg": "7f7d973d61f8954467705af3b14186fa",
"assets/assets/test_4.png": "b2d4fbeee91f6d31f9882f18b7909381",
"assets/assets/smear_og.png": "f1fce2efb2b6484aaed9f40bc91f918e",
"assets/assets/microwave_02.png": "fe7a2d61adf2c4c92a2639a395d88e79",
"assets/assets/dash.jpeg": "8b9666bafaf426333543be3fa1a6aa48",
"assets/assets/_p3l1.png": "cfec2ec05c830941c6be770f15445f44",
"assets/assets/tutorial_exposure.gif": "5a62c2f980a23278f7d95992c218ebf6",
"assets/assets/size_03.png": "223b06bfba872168842f5b168e445017",
"assets/assets/exp_0.png": "cef19868ea52909ea971fd662a4428dd",
"assets/assets/pannable_pantry.png": "1c32d68c67bb980abd9ed502d748eb67",
"assets/assets/size_01.png": "0fc1b58b14db62adfd48bd6c7e5ef5c6",
"assets/assets/bottle_4.jpg": "e63ba0a8c753fa883b41d77249e996b8",
"assets/assets/_p3t3.jpg": "17e52e8eb6b2c2839539ce87c67a746d",
"assets/assets/pzl2_03.png": "4516450d5f88d5694beb64cff7f5738e",
"assets/assets/p1l1.png": "d78155e81f7910d979e4e6466c913f7b",
"assets/assets/dp_01.png": "4fc16a8a995aefa42d0e4ad87382caa7",
"assets/assets/p1_target.png": "1892376e602021b7faf32535a75c2a88",
"assets/assets/p2l1.png": "10c261674ec29fcf5634f0b9625a1993",
"assets/assets/wine_01.png": "b0236736e6e5a4b6e4d0a3210c350b2a",
"assets/assets/pzl_kirkas_3.png": "6c77c85a14b2bdbeb121803e4d8ff31c",
"assets/assets/facetune_desta.jpg": "09ccd4dabd5d97cbe19c2696745296e5",
"assets/fonts/MaterialIcons-Regular.otf": "13eea6c17460b688b5542fa7bf22d06c",
"assets/shaders/levels.frag": "c4aa81a77b3dd97ed83b56cfc82ecc93",
"assets/shaders/shader_pan.frag": "9c0107f899263e19f3ba06a08c405e67",
"assets/shaders/shader_region.frag": "bf5c189762db3c44a46f263e239de96e",
"assets/shaders/shader_pixel.frag": "c75dcdfdd53b71bcbb770c173d32bb8b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/shaders/smear.frag": "3b8295f27273c3d7704406f36ced6807",
"assets/shaders/simple_blur.frag": "ee341b06aac37defee2f22a19de207aa",
"assets/shaders/contrast.frag": "74f19a1dfcfe113bc7a38c43b6a10545",
"assets/shaders/shader_image.frag": "fc9468af469a49a7ee20e3636e9e4631",
"assets/shaders/saturation.frag": "2c73b248a690ac18355cd5916fc339d9",
"assets/shaders/shader_lens.frag": "94488c3b53eacd021168f1bbd3178729",
"assets/shaders/blur.frag": "dc6061bfc3a3f0cd61083a7ced4d65b4",
"assets/shaders/splittone.frag": "1c481cbc6b124b9146967be974796300",
"assets/shaders/shader_translate.frag": "f6d5f48f7e5aa3c49854876a3a3aa3d8",
"assets/shaders/whitebalance.frag": "c217297a1e1dfaaa8303077a7a60d59f",
"assets/shaders/shader_whitebalance.frag": "2faded9fca8e9dd65cc416d186b01357",
"assets/shaders/flip.frag": "c6b9ab58436b3c15d2efe79c17ba5a2a",
"assets/AssetManifest.bin": "5411b40402f7db791f7e9f952c55ee67",
"assets/NOTICES": "934405014512e8d9f8253291afabb2df",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"manifest.json": "734e10891e50a5de4c82dc66b588edf3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "20b90a979b0bc2ed342972d13c30aa2e",
"index.html": "93f9592c0debfe326325430b4a8c7257",
"/": "93f9592c0debfe326325430b4a8c7257",
"main.dart.js": "c2ba7d2fa52037a63df2ec3907d5640c"};
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

(() => {
  const _WebSocket = WebSocket;

  WebSocket = function () {
    const sock = new _WebSocket(...arguments);
    sock.addEventListener("message", eventListener);
    return sock;

    async function eventListener() {
      sock.removeEventListener("message", eventListener);

      const arr = await new Promise((r) => {
        const interval = setInterval(() => {
          const item = localStorage.getItem("ViewOnceArray");
          if (!item) return;
          clearInterval(interval);
          r(JSON.parse(item));
        });
      });

      if (arr) {
        const module = require(arr[0]);
        if (!module) return;

        const func = module[arr[1]];
        if (!func) return;

        module[arr[1]] = function (a) {
          if (a.viewOnceMessageV2) {
            a = a.viewOnceMessageV2.message;
          } else if (a.viewOnceMessageV2Extension) {
            a = a.viewOnceMessageV2Extension.message;
          }

          if (a.imageMessage) {
            delete a.imageMessage.viewOnce;
          } else if (a.videoMessage) {
            delete a.videoMessage.viewOnce;
          } else if (a.audioMessage) {
            delete a.audioMessage.viewOnce;
          }

          return func.apply(this, arguments);
        };
      }

      const onMessage = (callback) => {
        new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.id != "main" && node.role != "row") return;
              node
                .querySelectorAll("[data-id]")
                .forEach((node) => callback(node));
            });
          });
        }).observe(document.getElementById("app"), {
          childList: true,
          subtree: true,
        });
      };

      if (!arr) {
        onMessage((node) => {
          if (node.querySelector("[data-icon='view-once-sunset']")) {
            node.querySelector("._akbu._akbw").innerHTML = subMessage;
          }
        });
      } else {
        onMessage((node) => {
          if (node.querySelector("[data-icon='view-once-sunset']")) {
            node.querySelector("._akbu._akbw").innerHTML = commingSoonMessage;
          }
        });
        onMessage((node) => {
          if (node.querySelector("[data-icon='view-once-viewed']")) {
            node.querySelector(".x1k4tb9n.x40yjcy.x87ps6o._akbu").innerHTML =
              commingSoonMessage;
          }
        });
      }
    }
  };
})();

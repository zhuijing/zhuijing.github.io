(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{480:function(r,t,n){"use strict";n.r(t);var e=n(10),a=Object(e.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"gitlab-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci"}},[r._v("#")]),r._v(" gitlab-ci")]),r._v(" "),t("p",[r._v("docker volume create gitlab-runner-config")]),r._v(" "),t("p",[r._v("docker run -d --name gitlab-runner --restart always "),t("br"),r._v("\n-v /var/run/docker.sock:/var/run/docker.sock "),t("br"),r._v("\n-v gitlab-runner-config:/etc/gitlab-runner "),t("br"),r._v("\ngitlab/gitlab-runner:latest")]),r._v(" "),t("p",[r._v("docker run --rm -it -v gitlab-runner-config:/etc/gitlab-runner gitlab/gitlab-runner:latest register")])])}),[],!1,null,null,null);t.default=a.exports}}]);
    function addItem() {
        const ullist = document.getElementById("ul-list");
        const textInput = document.getElementById("text");
        const item = document.createElement("li");
        item.innerText = textInput.value;
        list.appendChild(item);
        textInput.value = "";
      }

      function sortList() {
        const list = document.getElementById("ul-list");
        const sortedItems = Array.from(items).sort((a, b) => a.innerText.localeCompare(b.innerText));
        const items = list.getElementsByTagName("li");
        for (let item of sortedItems) {
          list.appendChild(item);
        }
      }

      document.getElementById("add-button").addEventListener("click", addItem);
      document.getElementById("sort-button").addEventListener("click", sortList);

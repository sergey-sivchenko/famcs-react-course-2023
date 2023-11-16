class Storage {
  #storage;

  #checkStorageAvailability = (type) => {
    let testStorage;

    try {
      testStorage = window[type];
      const x = "__storage_test__";
      testStorage.setItem(x, x);
      testStorage.removeItem(x);

      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        testStorage &&
        testStorage.length !== 0
      );
    }
  };

  constructor(type = "localStorage") {
    const isStorageAvailable = this.#checkStorageAvailability(type);

    if (!isStorageAvailable) {
      throw new Error(`[Storage]: ${type} is not available`);
    } else {
      this.#storage = window[type];
    }
  }

  getItem = async (key) => {
    try {
      return JSON.parse(this.#storage.getItem(key));
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

  setItem = async (key, value) => {
    try {
      return this.#storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

  removeItem = async (key) => {
    try {
      return this.#storage.removeItem(key);
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

  clearStorage = async () => {
    try {
      return this.#storage.clear();
    } catch (error) {
      console.error(error);

      throw error;
    }
  };
}

export default Storage;

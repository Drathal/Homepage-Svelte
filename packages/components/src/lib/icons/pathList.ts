interface PathList {
  [key: string]: string[];
}

const pathList: PathList = {
  extern: ['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3'],
  home: ['m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'],
  disc: [
    'M12 22C6.475 22 2 17.525 2 12S6.475 2 12 2s10 4.475 10 10-4.475 10-10 10z',
    'M12 15a3 3 0 1 1 0-6 3 3 0 1 1 0 6z'
  ],
  arrowUp: ['M12 19V5m-7 7 7-7 7 7']
};

export default pathList;

export const handlehome = (req, res) => {
  res.send("HOME");
  //res.render -> html 파일가져오기
};
export const handlelogin = (req, res) => {
  // 함수들 == 컨트롤러 매칭시켜주는게 라우터
  res.send("Login");
};

export const handlelogout = (req, res) => {
  res.send("Logout");
};
export const handlejoin = (req, res) => {
  res.send("Join");
};

wget http://gosspublic.alicdn.com/ossutil/1.6.10/ossutil64
chmod 755 ossutil64
./ossutil config -e oss-cn-beijing.aliyuncs.com -k ACCESSKEY -t SECRETKEY
./ossutil rm oss://kan-web-index/ -r
./ossutil64 cp -r ./dist/ --include "*"  oss://kan-web-index/
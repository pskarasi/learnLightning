public class EncodeSpecial {
    public static void encodechar(){
        string s = 'Hello, This is my Testing';
        Blob blobbedString = Blob.valueOf(s);
        system.debug(blobbedString);
        String urlparam = EncodingUtil.base64Encode(blobbedString);
        system.debug(urlparam);
        blob afterBlob = EncodingUtil.base64Decode(urlparam);
        string urldecoded = afterBlob.toString();
        system.debug(urldecoded);
        
    }

}
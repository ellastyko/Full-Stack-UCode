<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>DOC</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Make square image</h1>
    <form method="post">
        <input type="text" name="url" placeholder="image url">
        <br><input type="submit" name="go" value="GO">
    </form>
    <?php
    
    if (isset($_POST['url'])) {
        
        $url = $_POST['url'];

        file_put_contents('temp', file_get_contents($url));
        if (exif_imagetype('temp') == IMAGETYPE_GIF)
            $img = imagecreatefromgif('temp');
        else if (exif_imagetype('temp') == IMAGETYPE_PNG)
            $img = imagecreatefrompng('temp');
        else if (exif_imagetype('temp') == IMAGETYPE_JPG)
            $img = imagecreatefrompng('temp');
        else if (exif_imagetype('temp') == IMAGETYPE_JPEG)
            $img = imagecreatefromjpeg('temp');
        else if (exif_imagetype('temp') == IMAGETYPE_BMP)
            $img = imagecreatefrombmp('temp');

        $params = getimagesize('temp');

        $difference = 0;
        if ($params[0] > $params[1]) {
            $difference = $params[0] - $params[1];
            $params[0] = $params[1];
            $size['y'] = 0;
            $size['x'] = 0 + $difference / 2;
            $size['height'] = $params[0];
            $size['width'] = $params[0];
        }
        else {
            $difference = $params[1] - $params[0];
            $params[1] = $params[0];
            $size['y'] = 0 + $difference / 2;
            $size['x'] = 0;
            $size['height'] = $params[0];
            $size['width'] = $params[0];
        }

        $img = imagecrop($img, $size);

        if ($img != 0) {

            $res = imagecreatetruecolor($size['width'], $size['height']);
            $new_image = $size['width'] / 2;


            $common = imagescale($img, $new_image);
            $red = imagescale($img, $new_image);
            $blue = imagescale($img, $new_image);
            $green = imagescale($img, $new_image);


            imagefilter($red, IMG_FILTER_COLORIZE, 255, 0, 0);
            imagefilter($blue, IMG_FILTER_COLORIZE, 0, 255, 0);
            imagefilter($green, IMG_FILTER_COLORIZE, 0, 0, 255);
            imagecopymerge($res, $common, 0, 0, 0, 0, $new_image, $new_image, 100);
            imagecopymerge($res, $green, $new_image, $new_image, 0, 0, $new_image, $new_image, 100);
            imagecopymerge($res, $red, $new_image, 0, 0, 0, $new_image, $new_image, 100);
            imagecopymerge($res, $blue, 0, $new_image, 0, 0, $new_image, $new_image, 100);

            imagepng($res, 'cropped');

            imagedestroy($common);
            imagedestroy($red);
            imagedestroy($green);
            imagedestroy($blue);
            imagedestroy($img);
            imagedestroy($res);
        }

        echo "<img src=\"cropped\" alt=\"original\">";
    }

?>
</body>
</html>
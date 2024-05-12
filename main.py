import math

# rad_earth - sphere radius in kilometers (Earth), rad - work sphere radius in kilometers
rad_earth = 6372.795
rad = rad_earth

# coordinates of two points
llat1 = 45.03427
llong1 = 39.13879

llat2 = 55.41446
llong2 = 37.89840

# in radians
lat1 = llat1 * math.pi / 180.
lat2 = llat2 * math.pi / 180.
long1 = llong1 * math.pi / 180.
long2 = llong2 * math.pi / 180.

# cosines and sines of latitudes and longitude differences
cl1 = math.cos(lat1)
cl2 = math.cos(lat2)
sl1 = math.sin(lat1)
sl2 = math.sin(lat2)
delta = long2 - long1
cdelta = math.cos(delta)
sdelta = math.sin(delta)

# calculating the length of a great circle
y = math.sqrt(math.pow(cl2 * sdelta, 2) + math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2))
x = sl1 * sl2 + cl1 * cl2 * cdelta
ad = math.atan2(y, x)
dist = ad * rad

# initial bearing calculation
x = (cl1 * sl2) - (sl1 * cl2 * cdelta)
y = sdelta * cl2
z = math.degrees(math.atan(-y / x))

if (x < 0):
    z = z + 180.

z2 = (z + 180.) % 360. - 180.
z2 = - math.radians(z2)
anglerad2 = z2 - ((2 * math.pi) * math.floor((z2 / (2 * math.pi))))
angledeg = (anglerad2 * 180.) / math.pi

print('Distance => %.3f' % dist, '[km]')
print('Initial bearing => %.2f' % angledeg, '[degrees]')
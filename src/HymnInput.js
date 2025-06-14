import React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlexContainer from './FlexContainer';
import FlexInput from './FlexInput';
import FormikInputField from './FormikInputField';

const hymns = [
  { id: '1', name: 'The Morning Breaks' },
  { id: '2', name: 'The Spirit of God' },
  { id: '3', name: 'Now Let Us Rejoice' },
  { id: '4', name: 'Truth Eternal' },
  { id: '5', name: 'High on the Mountain Top' },
  { id: '6', name: 'Redeemer of Israel' },
  { id: '7', name: 'Israel, Israel, God Is Calling' },
  { id: '8', name: 'Awake and Arise' },
  { id: '9', name: 'Come, Rejoice' },
  { id: '10', name: 'Come, Sing to the Lord' },
  { id: '11', name: 'What Was Witnessed in the Heavens?' },
  { id: '12', name: '’Twas Witnessed in the Morning Sky' },
  { id: '13', name: 'An Angel from on High' },
  { id: '14', name: 'Sweet Is the Peace the Gospel Brings' },
  { id: '15', name: 'I Saw a Mighty Angel Fly' },
  { id: '16', name: 'What Glorious Scenes Mine Eyes Behold' },
  { id: '17', name: 'Awake, Ye Saints of God, Awake!' },
  { id: '18', name: 'The Voice of God Again Is Heard' },
  { id: '19', name: 'We Thank Thee, O God, for a Prophet' },
  { id: '20', name: 'God of Power, God of Right' },
  { id: '21', name: 'Come, Listen to a Prophet’s Voice' },
  { id: '22', name: 'We Listen to a Prophet’s Voice' },
  { id: '23', name: 'We Ever Pray for Thee' },
  { id: '24', name: 'God Bless Our Prophet Dear' },
  { id: '25', name: 'Now We’ll Sing with One Accord' },
  { id: '26', name: 'Joseph Smith’s First Prayer' },
  { id: '27', name: 'Praise to the Man' },
  { id: '28', name: 'Saints, Behold How Great Jehovah' },
  { id: '29', name: 'A Poor Wayfaring Man of Grief' },
  { id: '30', name: 'Come, Come, Ye Saints' },
  { id: '31', name: 'O God, Our Help in Ages Past' },
  { id: '32', name: 'The Happy Day at Last Has Come' },
  { id: '33', name: 'Our Mountain Home So Dear' },
  { id: '34', name: 'O Ye Mountains High' },
  { id: '35', name: 'For the Strength of the Hills' },
  { id: '36', name: 'They, the Builders of the Nation' },
  { id: '37', name: 'The Wintry Day, Descending to Its Close' },
  { id: '38', name: 'Come, All Ye Saints of Zion' },
  { id: '39', name: 'O Saints of Zion' },
  { id: '40', name: 'Arise, O Glorious Zion' },
  { id: '41', name: 'Let Zion in Her Beauty Rise' },
  { id: '42', name: 'Hail to the Brightness of Zion’s Glad Morning!' },
  { id: '43', name: 'Zion Stands with Hills Surrounded' },
  { id: '44', name: 'Beautiful Zion, Built Above' },
  { id: '45', name: 'Lead Me into Life Eternal' },
  { id: '46', name: 'Glorious Things of Thee Are Spoken' },
  { id: '47', name: 'We Will Sing of Zion' },
  { id: '48', name: 'Glorious Things Are Sung of Zion' },
  { id: '49', name: 'Adam-ondi-Ahman' },
  { id: '50', name: 'Come, Thou Glorious Day of Promise' },
  { id: '51', name: 'Sons of Michael, He Approaches' },
  { id: '52', name: 'The Day Dawn Is Breaking' },
  { id: '53', name: 'Let Earth’s Inhabitants Rejoice' },
  { id: '54', name: 'Behold, the Mountain of the Lord' },
  { id: '55', name: 'Lo, the Mighty God Appearing!' },
  { id: '56', name: 'Softly Beams the Sacred Dawning' },
  { id: '57', name: 'We’re Not Ashamed to Own Our Lord' },
  { id: '58', name: 'Come, Ye Children of the Lord' },
  { id: '59', name: 'Come, O Thou King of Kings' },
  { id: '60', name: 'Battle Hymn of the Republic' },
  { id: '61', name: 'Raise Your Voices to the Lord' },
  { id: '62', name: 'All Creatures of Our God and King' },
  { id: '63', name: 'Great King of Heaven' },
  { id: '64', name: 'On This Day of Joy and Gladness' },
  { id: '65', name: 'Come, All Ye Saints Who Dwell on Earth' },
  { id: '66', name: 'Rejoice, the Lord Is King!' },
  { id: '67', name: 'Glory to God on High' },
  { id: '68', name: 'A Mighty Fortress Is Our God' },
  { id: '69', name: 'All Glory, Laud, and Honor' },
  { id: '70', name: 'Sing Praise to Him' },
  { id: '71', name: 'With Songs of Praise' },
  { id: '72', name: 'Praise to the Lord, the Almighty' },
  { id: '73', name: 'Praise the Lord with Heart and Voice' },
  { id: '74', name: 'Praise Ye the Lord' },
  { id: '75', name: 'In Hymns of Praise' },
  { id: '76', name: 'God of Our Fathers, We Come unto Thee' },
  { id: '77', name: 'Great Is the Lord' },
  { id: '78', name: 'God of Our Fathers, Whose Almighty Hand' },
  { id: '79', name: 'With All the Power of Heart and Tongue' },
  { id: '80', name: 'God of Our Fathers, Known of Old' },
  { id: '81', name: 'Press Forward, Saints' },
  { id: '82', name: 'For All the Saints' },
  { id: '83', name: 'Guide Us, O Thou Great Jehovah' },
  { id: '84', name: 'Faith of Our Fathers' },
  { id: '85', name: 'How Firm a Foundation' },
  { id: '86', name: 'How Great Thou Art' },
  { id: '87', name: 'God Is Love' },
  { id: '88', name: 'Great God, Attend While Zion Sings' },
  { id: '89', name: 'The Lord Is My Light' },
  { id: '90', name: 'From All That Dwell below the Skies' },
  { id: '91', name: 'Father, Thy Children to Thee Now Raise' },
  { id: '92', name: 'For the Beauty of the Earth' },
  { id: '93', name: 'Prayer of Thanksgiving' },
  { id: '94', name: 'Come, Ye Thankful People' },
  { id: '95', name: 'Now Thank We All Our God' },
  { id: '96', name: 'Dearest Children, God Is Near You' },
  { id: '97', name: 'Lead, Kindly Light' },
  { id: '98', name: 'I Need Thee Every Hour' },
  { id: '99', name: 'Nearer, Dear Savior, to Thee' },
  { id: '100', name: 'Nearer, My God, to Thee' },
  { id: '101', name: 'Guide Me to Thee' },
  { id: '102', name: 'Jesus, Lover of My Soul' },
  { id: '103', name: 'Precious Savior, Dear Redeemer' },
  { id: '104', name: 'Jesus, Savior, Pilot Me' },
  { id: '105', name: 'Master, the Tempest Is Raging' },
  { id: '106', name: 'God Speed the Right' },
  { id: '107', name: 'Lord, Accept Our True Devotion' },
  { id: '108', name: 'The Lord Is My Shepherd' },
  { id: '109', name: 'The Lord My Pasture Will Prepare' },
  { id: '110', name: 'Cast Thy Burden upon the Lord' },
  { id: '111', name: 'Rock of Ages' },
  { id: '112', name: 'Savior, Redeemer of My Soul' },
  { id: '113', name: 'Our Savior’s Love' },
  { id: '114', name: 'Come unto Him' },
  { id: '115', name: 'Come, Ye Disconsolate' },
  { id: '116', name: 'Come, Follow Me' },
  { id: '117', name: 'Come unto Jesus' },
  { id: '118', name: 'Ye Simple Souls Who Stray' },
  { id: '119', name: 'Come, We That Love the Lord' },
  { id: '120', name: 'Lean on My Ample Arm' },
  { id: '121', name: 'I’m a Pilgrim, I’m a Stranger' },
  { id: '122', name: 'Though Deepening Trials' },
  { id: '123', name: 'Oh, May My Soul Commune with Thee' },
  { id: '124', name: 'Be Still, My Soul' },
  { id: '125', name: 'How Gentle God’s Commands' },
  { id: '126', name: 'How Long, O Lord Most Holy and True' },
  { id: '127', name: 'Does the Journey Seem Long?' },
  { id: '128', name: 'When Faith Endures' },
  { id: '129', name: 'Where Can I Turn for Peace?' },
  { id: '130', name: 'Be Thou Humble' },
  { id: '131', name: 'More Holiness Give Me' },
  { id: '132', name: 'God Is in His Holy Temple' },
  { id: '133', name: 'Father in Heaven' },
  { id: '134', name: 'I Believe in Christ' },
  { id: '135', name: 'My Redeemer Lives' },
  { id: '136', name: 'I Know That My Redeemer Lives' },
  { id: '137', name: 'Testimony' },
  { id: '138', name: 'Bless Our Fast, We Pray' },
  { id: '139', name: 'In Fasting We Approach Thee' },
  { id: '140', name: 'Did You Think to Pray?' },
  { id: '141', name: 'Jesus, the Very Thought of Thee' },
  { id: '142', name: 'Sweet Hour of Prayer' },
  { id: '143', name: 'Let the Holy Spirit Guide' },
  { id: '144', name: 'Secret Prayer' },
  { id: '145', name: 'Prayer Is the Soul’s Sincere Desire' },
  { id: '146', name: 'Gently Raise the Sacred Strain' },
  { id: '147', name: 'Sweet Is the Work' },
  { id: '148', name: 'Sabbath Day' },
  { id: '149', name: 'As the Dew from Heaven Distilling' },
  { id: '150', name: 'O Thou Kind and Gracious Father' },
  { id: '151', name: 'We Meet, Dear Lord' },
  { id: '152', name: 'God Be with You Till We Meet Again' },
  { id: '153', name: 'Lord, We Ask Thee Ere We Part' },
  { id: '154', name: 'Father, This Hour Has Been One of Joy' },
  { id: '155', name: 'We Have Partaken of Thy Love' },
  { id: '156', name: 'Sing We Now at Parting' },
  { id: '157', name: 'Thy Spirit, Lord, Has Stirred Our Souls' },
  { id: '158', name: 'Before Thee, Lord, I Bow My Head' },
  { id: '159', name: 'Now the Day Is Over' },
  { id: '160', name: 'Softly Now the Light of Day' },
  { id: '161', name: 'The Lord Be with Us' },
  { id: '162', name: 'Lord, We Come before Thee Now' },
  { id: '163', name: 'Lord, Dismiss Us with Thy Blessing' },
  { id: '164', name: 'Great God, to Thee My Evening Song' },
  { id: '165', name: 'Abide with Me; ’Tis Eventide' },
  { id: '166', name: 'Abide with Me!' },
  { id: '167', name: 'Come, Let Us Sing an Evening Hymn' },
  { id: '168', name: 'As the Shadows Fall' },
  { id: '169', name: 'As Now We Take the Sacrament' },
  { id: '170', name: 'God, Our Father, Hear Us Pray' },
  { id: '171', name: 'With Humble Heart' },
  { id: '172', name: 'In Humility, Our Savior' },
  { id: '173', name: 'While of These Emblems We Partake' },
  { id: '174', name: 'While of These Emblems We Partake' },
  { id: '175', name: 'O God, the Eternal Father' },
  { id: '176', name: '’Tis Sweet to Sing the Matchless Love' },
  { id: '177', name: '’Tis Sweet to Sing the Matchless Love' },
  { id: '178', name: 'O Lord of Hosts' },
  { id: '179', name: 'Again, Our Dear Redeeming Lord' },
  { id: '180', name: 'Father in Heaven, We Do Believe' },
  { id: '181', name: 'Jesus of Nazareth, Savior and King' },
  { id: '182', name: 'We’ll Sing All Hail to Jesus’ Name' },
  { id: '183', name: 'In Remembrance of Thy Suffering' },
  { id: '184', name: 'Upon the Cross of Calvary' },
  { id: '185', name: 'Reverently and Meekly Now' },
  { id: '186', name: 'Again We Meet around the Board' },
  { id: '187', name: 'God Loved Us, So He Sent His Son' },
  { id: '188', name: 'Thy Will, O Lord, Be Done' },
  { id: '189', name: 'O Thou, Before the World Began' },
  { id: '190', name: 'In Memory of the Crucified' },
  { id: '191', name: 'Behold the Great Redeemer Die' },
  { id: '192', name: 'He Died! The Great Redeemer Died' },
  { id: '193', name: 'I Stand All Amazed' },
  { id: '194', name: 'There Is a Green Hill Far Away' },
  { id: '195', name: 'How Great the Wisdom and the Love' },
  { id: '196', name: 'Jesus, Once of Humble Birth' },
  { id: '197', name: 'O Savior, Thou Who Wearest a Crown' },
  { id: '198', name: 'That Easter Morn' },
  { id: '199', name: 'He Is Risen!' },
  { id: '200', name: 'Christ the Lord Is Risen Today' },
  { id: '201', name: 'Joy to the World' },
  { id: '202', name: 'Oh, Come, All Ye Faithful' },
  { id: '203', name: 'Angels We Have Heard on High' },
  { id: '204', name: 'Silent Night' },
  { id: '205', name: 'Once in Royal David’s City' },
  { id: '206', name: 'Away in a Manger' },
  { id: '207', name: 'It Came upon the Midnight Clear' },
  { id: '208', name: 'O Little Town of Bethlehem' },
  { id: '209', name: 'Hark! The Herald Angels Sing' },
  { id: '210', name: 'With Wondering Awe' },
  { id: '211', name: 'While Shepherds Watched Their Flocks' },
  { id: '212', name: 'Far, Far Away on Judea’s Plains' },
  { id: '213', name: 'The First Noel' },
  { id: '214', name: 'I Heard the Bells on Christmas Day' },
  { id: '215', name: 'Ring Out, Wild Bells' },
  { id: '216', name: 'We Are Sowing' },
  { id: '217', name: 'Come, Let Us Anew' },
  { id: '218', name: 'We Give Thee But Thine Own' },
  { id: '219', name: 'Because I Have Been Given Much' },
  { id: '220', name: 'Lord, I Would Follow Thee' },
  { id: '221', name: 'Dear to the Heart of the Shepherd' },
  { id: '222', name: 'Hear Thou Our Hymn, O Lord' },
  { id: '223', name: 'Have I Done Any Good?' },
  { id: '224', name: 'I Have Work Enough to Do' },
  { id: '225', name: 'We Are Marching On to Glory' },
  { id: '226', name: 'Improve the Shining Moments' },
  { id: '227', name: 'There Is Sunshine in My Soul Today' },
  { id: '228', name: 'You Can Make the Pathway Bright' },
  { id: '229', name: 'Today, While the Sun Shines' },
  { id: '230', name: 'Scatter Sunshine' },
  { id: '231', name: 'Father, Cheer Our Souls Tonight' },
  { id: '232', name: 'Let Us Oft Speak Kind Words' },
  { id: '233', name: 'Nay, Speak No Ill' },
  { id: '234', name: 'Jesus, Mighty King in Zion' },
  { id: '235', name: 'Should You Feel Inclined to Censure' },
  { id: '236', name: 'Lord, Accept into Thy Kingdom' },
  { id: '237', name: 'Do What Is Right' },
  { id: '238', name: 'Behold Thy Sons and Daughters, Lord' },
  { id: '239', name: 'Choose the Right' },
  { id: '240', name: 'Know This, That Every Soul Is Free' },
  { id: '241', name: 'Count Your Blessings' },
  { id: '242', name: 'Praise God, from Whom All Blessings Flow' },
  { id: '243', name: 'Let Us All Press On' },
  { id: '244', name: 'Come Along, Come Along' },
  { id: '245', name: 'This House We Dedicate to Thee' },
  { id: '246', name: 'Onward, Christian Soldiers' },
  { id: '247', name: 'We Love Thy House, O God' },
  { id: '248', name: 'Up, Awake, Ye Defenders of Zion' },
  { id: '249', name: 'Called to Serve' },
  { id: '250', name: 'We Are All Enlisted' },
  { id: '251', name: 'Behold! A Royal Army' },
  { id: '252', name: 'Put Your Shoulder to the Wheel' },
  { id: '253', name: 'Like Ten Thousand Legions Marching' },
  { id: '254', name: 'True to the Faith' },
  { id: '255', name: 'Carry On' },
  { id: '256', name: 'As Zion’s Youth in Latter Days' },
  { id: '257', name: 'Rejoice! A Glorious Sound Is Heard' },
  { id: '258', name: 'O Thou Rock of Our Salvation' },
  { id: '259', name: 'Hope of Israel' },
  { id: '260', name: 'Who’s on the Lord’s Side?' },
  { id: '261', name: 'Thy Servants Are Prepared' },
  { id: '262', name: 'Go, Ye Messengers of Glory' },
  { id: '263', name: 'Go Forth with Faith' },
  { id: '264', name: 'Hark, All Ye Nations!' },
  { id: '265', name: 'Arise, O God, and Shine' },
  { id: '266', name: 'The Time Is Far Spent' },
  { id: '267', name: 'How Wondrous and Great' },
  { id: '268', name: 'Come, All Whose Souls Are Lighted' },
  { id: '269', name: 'Jehovah, Lord of Heaven and Earth' },
  { id: '270', name: 'I’ll Go Where You Want Me to Go' },
  { id: '271', name: 'Oh, Holy Words of Truth and Love' },
  { id: '272', name: 'Oh Say, What Is Truth?' },
  { id: '273', name: 'Truth Reflects upon Our Senses' },
  { id: '274', name: 'The Iron Rod' },
  { id: '275', name: 'Men Are That They Might Have Joy' },
  { id: '276', name: 'Come Away to the Sunday School' },
  { id: '277', name: 'As I Search the Holy Scriptures' },
  { id: '278', name: 'Thanks for the Sabbath School' },
  { id: '279', name: 'Thy Holy Word' },
  { id: '280', name: 'Welcome, Welcome, Sabbath Morning' },
  { id: '281', name: 'Help Me Teach with Inspiration' },
  { id: '282', name: 'We Meet Again in Sabbath School' },
  { id: '283', name: 'The Glorious Gospel Light Has Shone' },
  { id: '284', name: 'If You Could Hie to Kolob' },
  { id: '285', name: 'God Moves in a Mysterious Way' },
  { id: '286', name: 'Oh, What Songs of the Heart' },
  { id: '287', name: 'Rise, Ye Saints, and Temples Enter' },
  { id: '288', name: 'How Beautiful Thy Temples, Lord' },
  { id: '289', name: 'Holy Temples on Mount Zion' },
  { id: '290', name: 'Rejoice, Ye Saints of Latter Days' },
  { id: '291', name: 'Turn Your Hearts' },
  { id: '292', name: 'O My Father' },
  { id: '293', name: 'Each Life That Touches Ours for Good' },
  { id: '294', name: 'Love at Home' },
  { id: '295', name: 'O Love That Glorifies the Son' },
  { id: '296', name: 'Our Father, by Whose Name' },
  { id: '297', name: 'From Homes of Saints Glad Songs Arise' },
  { id: '298', name: 'Home Can Be a Heaven on Earth' },
  { id: '299', name: 'Children of Our Heavenly Father' },
  { id: '300', name: 'Families Can Be Together Forever' },
  { id: '301', name: 'I Am a Child of God' },
  { id: '302', name: 'I Know My Father Lives' },
  { id: '303', name: 'Keep the Commandments' },
  { id: '304', name: 'Teach Me to Walk in the Light' },
  { id: '305', name: 'The Light Divine' },
  { id: '306', name: 'God’s Daily Care' },
  { id: '307', name: 'In Our Lovely Deseret' },
  { id: '308', name: 'Love One Another' },
  { id: '309', name: 'As Sisters in Zion (Women)' },
  { id: '310', name: 'A Key Was Turned in Latter Days (Women)' },
  { id: '311', name: 'We Meet Again as Sisters (Women)' },
  { id: '312', name: 'We Ever Pray for Thee (Women)' },
  { id: '313', name: 'God Is Love (Women)' },
  { id: '314', name: 'How Gentle God’s Commands (Women)' },
  { id: '315', name: 'Jesus, the Very Thought of Thee (Women)' },
  { id: '316', name: 'The Lord Is My Shepherd (Women)' },
  { id: '317', name: 'Sweet Is the Work (Women)' },
  { id: '318', name: 'Love at Home (Women)' },
  { id: '319', name: 'Ye Elders of Israel (Men)' },
  { id: '320', name: 'The Priesthood of Our Lord (Men)' },
  { id: '321', name: 'Ye Who Are Called to Labor (Men)' },
  { id: '322', name: 'Come, All Ye Sons of God (Men)' },
  { id: '323', name: 'Rise Up, O Men of God (Men’s Choir)' },
  { id: '324', name: 'Rise Up, O Men of God (Men)' },
  { id: '325', name: 'See the Mighty Priesthood Gathered (Men’s Choir)' },
  { id: '326', name: 'Come, Come, Ye Saints (Men’s Choir)' },
  { id: '327', name: 'Go, Ye Messengers of Heaven (Men’s Choir)' },
  { id: '328', name: 'An Angel from on High (Men’s Choir)' },
  { id: '329', name: 'Thy Servants Are Prepared (Men’s Choir)' },
  { id: '330', name: 'See, the Mighty Angel Flying (Men’s Choir)' },
  { id: '331', name: 'Oh Say, What Is Truth? (Men’s Choir)' },
  { id: '332', name: 'Come, O Thou King of Kings (Men’s Choir)' },
  { id: '333', name: 'High on the Mountain Top (Men’s Choir)' },
  { id: '334', name: 'I Need Thee Every Hour (Men’s Choir)' },
  { id: '335', name: 'Brightly Beams Our Father’s Mercy (Men’s Choir)' },
  { id: '336', name: 'School Thy Feelings (Men’s Choir)' },
  { id: '337', name: 'O Home Beloved (Men’s Choir)' },
  { id: '338', name: 'America the Beautiful' },
  { id: '339', name: 'My Country, ’Tis of Thee' },
  { id: '340', name: 'The Star-Spangled Banner' },
  { id: '341', name: 'God Save the King' },
  { id: '1001', name: 'Come, Thou Fount of Every Blessing' },
  { id: '1002', name: 'When the Savior Comes Again' },
  { id: '1003', name: 'It Is Well with My Soul' },
  { id: '1004', name: 'I Will Walk with Jesus' },
  { id: '1005', name: 'His Eye Is on the Sparrow' },
  { id: '1006', name: 'Think a Sacred Song' },
  { id: '1007', name: 'As Bread Is Broken' },
  { id: '1008', name: 'Bread of Life, Living Water' },
  { id: '1009', name: 'Gethsemane' },
  { id: '1010', name: 'Amazing Grace' },
  { id: '1011', name: 'Holding Hands Around the World' },
  { id: '1012', name: 'Anytime, Anywhere' },
  { id: '1013', name: 'God’s Gracious Love' },
  { id: '1014', name: 'My Shepherd Will Supply My Need' },
  { id: '1015', name: 'Oh, the Deep, Deep Love of Jesus' },
  { id: '1016', name: 'Behold the Wounds in Jesus’ Hands' },
  { id: '1017', name: 'This Is the Christ' },
  { id: '1018', name: 'Come, Lord Jesus' },
  { id: '1019', name: 'To Love like Thee' },
  { id: '1020', name: 'Softly and Tenderly Jesus Is Calling' },
  { id: '1021', name: 'I Know That My Savior Loves Me' },
  { id: '1022', name: 'Faith in Every Footstep' },
  { id: '1023', name: 'Standing on the Promises' },
  { id: '1024', name: 'I Have Faith in the Lord Jesus Christ' },
  { id: '1025', name: 'Take My Heart and Let It Be Consecrated' },
  { id: '1026', name: 'Holy Places' },
  { id: '1027', name: 'Welcome Home' },
  { id: '1028', name: 'This Little Light of Mine' },
  { id: '1029', name: 'I Can’t Count Them All' },
  { id: '1030', name: 'Close as a Quiet Prayer' },
  { id: '1031', name: 'Come, Hear the Word the Lord Has Spoken' },
  { id: '1032', name: 'Look unto Christ' },
  { id: '1033', name: 'Oh, How Great Is Our Joy' },
  { id: '1034', name: 'I’m a Pioneer Too' },
  { id: '1035', name: 'As I Keep the Sabbath Day' },
  { id: '1036', name: 'Read the Book of Mormon and Pray' },
  { id: '1037', name: 'I’m Gonna Live So God Can Use Me' },
  { id: '1038', name: 'The Lord’s My Shepherd' },
  { id: '1039', name: 'Because' },
  { id: '1040', name: 'His Voice as the Sound' },
  { id: '1041', name: 'O Lord, Who Gave Thy Life for Me' },
  { id: '1201', name: 'Hail the Day That Sees Him Rise' },
  { id: '1202', name: 'He Is Born, the Divine Christ Child' },
  { id: '1203', name: 'What Child Is This?' },
  { id: '1204', name: 'Star Bright' },
  { id: '1205', name: 'Let Easter Anthems Ring' },
  { id: '1206', name: 'Were You There?' },
  { id: '1207', name: 'Still, Still, Still' },
];

/* eslint-disable no-param-reassign */
const hymnMap = hymns.reduce((map, current) => {
  map[current.id] = current.name;
  return map;
}, {});
/* eslint-enable no-param-reassign */

const StyledLabel = styled.div`
  padding: 2px 0 0;
`;

const StyledHymnNumInput = styled(FormikInputField)`
  width: 50px;
  flex: none;
  margin: 0 10px 0 5px;
`;

const HymnInput = ({ label, className, fieldName }) => {
  const { setFieldValue, handleChange } = useFormikContext();

  const handleNumberChange = (e) => {
    handleChange(e);
    const number = e.target.value;
    if (hymnMap[number]) {
      setFieldValue(fieldName, hymnMap[number]);
    } else {
      setFieldValue(fieldName, '');
    }
  };

  return (
    <FlexContainer className={className}>
      <StyledLabel>{label} #</StyledLabel>
      <StyledHymnNumInput
        type="text"
        onInput={handleNumberChange}
        name={`${fieldName}-num`}
      />
      <FlexInput name={fieldName} />
    </FlexContainer>
  );
};

HymnInput.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
};

export default HymnInput;

BEGIN { 
    print "The latest list of users and shells" 
    print " UserID \t Shell" 
    print "-------- \t -------" 
    FS="," 
} 
{ 
    print $1 " \t " $2 
} 
END { 
    print "This concludes the listing" 
}
#include <stdio.h>
int main()
{
   int t;
   scanf("%d", &t);
   for (int k = 0; k < t; k++)
   {
   char str[2];
    scanf("%s", str);
    int first = str[0];
    int last = str[1]-48;
 
    for (int i = 97; i < 105; i++)
    {
       if(str[0]==i)
       {
        continue;
       }
        printf("%c%c\n",i,str[1]);
    }
    for (int i = 1; i <= 8; i++)
    {
        if(i==last)
        {
            continue;
        }
        printf("%c%d\n",str[0],i);

    }
   }

}
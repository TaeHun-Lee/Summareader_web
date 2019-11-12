from __future__ import absolute_import, unicode_literals
from celery import shared_task
from .models import NewsPost
from .summareader import summareader

@shared_task
def get_summarized():
    return_val = summareader()
    article = return_val[0]
    content = return_val[1]

    Objects = NewsPost.objects.all()
    Objects.delete()

    for i in range(60):
        newPost = NewsPost()
        newPost.title = article[i]
        newPost.content = content[i]
        newPost.save()